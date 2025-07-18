import { expect, inject } from 'vitest'
import * as WebdriverIO from 'webdriverio'
import { driverOptions } from './driverOptions'
import { Node, type Descendant } from 'slate'
import { stringToKeycodes } from './stringToKeycodes'
import { AndroidKeys } from './keycodes'

export interface TypeOptions {
  delay?: number
}

export interface BackspaceOptions {
  delay?: number
}

class Driver {
  private _driver: WebdriverIO.Browser | null = null

  async connect() {
    this._driver = await WebdriverIO.attach({
      sessionId: inject('sessionId'),
      // Options must be specified in both places for the driver to work correctly
      options: driverOptions,
      ...driverOptions,
    })
  }

  async refresh() {
    await this.driver.$('//android.widget.Button[@text="Refresh"]').click()
    await this.driver.pause(500)
  }

  async focus() {
    await this.editable.click()
  }

  async type(text: string, { delay = 0 }: TypeOptions = {}) {
    const keycodes = stringToKeycodes(text)

    for (const keycode of keycodes) {
      await this.driver.pressKeyCode(keycode.keycode, keycode.shift ? 1 : 0)

      if (delay > 0) {
        await this.driver.pause(delay)
      }
    }
  }

  async backspace(count = 1, { delay = 0 }: BackspaceOptions = {}) {
    for (let i = 0; i < count; i++) {
      await this.driver.pressKeyCode(AndroidKeys.KEYCODE_DEL)

      if (delay > 0) {
        await this.driver.pause(delay)
      }
    }
  }

  async getPlainText() {
    return this.editable.getText()
  }

  async getValue() {
    const inspectSlate = this.driver.$('//*[@resource-id="inspect-slate"]')
    return JSON.parse(await inspectSlate.getText())
  }

  async getHtml() {
    const inspectHtml = this.driver.$('//*[@resource-id="inspect-html"]')
    return inspectHtml.getText()
  }

  async expectValue(expectedValue: Descendant[]) {
    const expectedText = expectedValue.map(Node.string).join('\n')

    const [actualText, actualValue] = await Promise.all([
      this.getPlainText(),
      this.getValue(),
    ])

    expect(actualValue).toEqual(expectedValue)
    expect(actualText).toEqual(expectedText)
  }

  get editable() {
    return this.driver.$('//*[@resource-id="editable"]')
  }

  get driver() {
    if (this._driver) return this._driver

    throw new Error(
      'driver.connect must be called before calling any other methods on driver',
    )
  }
}

export const driver = new Driver()
