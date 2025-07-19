import { expect, inject } from 'vitest'
import * as WebdriverIO from 'webdriverio'
import { appActivity, appPackage, driverOptions } from './driverOptions'
import { Editor, Node } from 'slate'
import { stringToKeycodes } from './stringToKeycodes'
import { AndroidKeys } from './keycodes'
import { GboardLanguageSwitcher, type Language } from './LanguageSwitcher'

export interface DelayOptions {
  delayAfter?: number
}

export interface MultipleDelayOptions extends DelayOptions {
  delayBetween?: number
}

export class Driver {
  private _driver: WebdriverIO.Browser | null = null

  async connect() {
    this._driver = await WebdriverIO.attach({
      sessionId: inject('sessionId'),
      // Options must be specified in both places for the driver to work correctly
      options: driverOptions,
      ...driverOptions,
    })
  }

  async startSlateActivity({ delayAfter = 1000 }: DelayOptions = {}) {
    await this.driver.startActivity(appPackage, appActivity)
    await this.pause(delayAfter)
  }

  async switchLanguage(language: Language) {
    await this.refresh()
    // TODO: Add support for other keyboards and ensure the correct one is used
    await new GboardLanguageSwitcher(this).ensureLanguage(language)
  }

  async cycleLanguage({ delayAfter = 500 }: DelayOptions = {}) {
    // On some devices, this may need to be KEYCODE_LANGUAGE_SWITCH instead
    await driver.driver.pressKeyCode(AndroidKeys.KEYCODE_SPACE, 1)
    await this.pause(delayAfter)
  }

  async refresh({ delayAfter = 1000 }: DelayOptions = {}) {
    await this.driver.$('//android.widget.Button[@text="Refresh"]').click()
    await this.pause(delayAfter)
  }

  async focus() {
    await this.editable.click()
  }

  async setValue({
    children,
    selection,
  }: Pick<Editor, 'children' | 'selection'>) {
    await this.driver
      .$('//*[@resource-id="replace-value"]')
      .setValue(JSON.stringify(children))

    await this.driver
      .$('//*[@resource-id="replace-selection"]')
      .setValue(JSON.stringify(selection))
  }

  async type(
    text: string,
    { delayBetween = 50, delayAfter = 500 }: MultipleDelayOptions = {},
  ) {
    const keycodes = stringToKeycodes(text)

    for (let i = 0; i < keycodes.length; i++) {
      if (i > 0) {
        await this.pause(delayBetween)
      }

      const keycode = keycodes[i]
      await this.driver.pressKeyCode(keycode.keycode, keycode.shift ? 1 : 0)
    }

    await this.pause(delayAfter)
  }

  async backspace(
    count = 1,
    { delayBetween = 50, delayAfter = 500 }: MultipleDelayOptions = {},
  ) {
    for (let i = 0; i < count; i++) {
      if (i > 0) {
        await this.pause(delayBetween)
      }

      await this.driver.pressKeyCode(AndroidKeys.KEYCODE_DEL)
    }

    await this.pause(delayAfter)
  }

  async pause(delay: number) {
    if (delay > 0) {
      await this.driver.pause(delay)
    }
  }

  async getPlainText() {
    return this.editable.getText()
  }

  async getValue() {
    const inspectSlate = this.driver.$('//*[@resource-id="inspect-slate"]')
    return JSON.parse(await inspectSlate.getText())
  }

  async getSelection() {
    const inspectSelection = this.driver.$(
      '//*[@resource-id="inspect-selection"]',
    )
    return JSON.parse(await inspectSelection.getText())
  }

  async getHtml() {
    const inspectHtml = this.driver.$('//*[@resource-id="inspect-html"]')
    return inspectHtml.getText()
  }

  async expectValue({
    children,
    selection,
  }: Pick<Editor, 'children' | 'selection'>) {
    const text = children.map(Node.string).join('\n')

    const [actualText, actualValue, actualSelection] = await Promise.all([
      this.getPlainText(),
      this.getValue(),
      this.getSelection(),
    ])

    expect(actualValue).toEqual(children)
    expect(actualSelection).toEqual(selection)
    expect(actualText).toEqual(text)
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
