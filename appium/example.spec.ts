import { beforeAll, beforeEach, expect, inject, test } from 'vitest'
import { AndroidKeys } from './keycodes'
import * as WebdriverIO from 'webdriverio'
import { driverOptions } from './globalSetup'

let driver: WebdriverIO.Browser

beforeAll(async () => {
  driver = await WebdriverIO.attach({
    sessionId: inject('sessionId'),
    // Options must be specified in both places for the driver to work correctly
    options: driverOptions,
    ...driverOptions,
  })
})

beforeEach(async () => {
  await driver.$('//android.widget.Button[@text="Refresh"]').click()
})

test('it works', async () => {
  const editable = driver.$('//*[@resource-id="editable"]')
  const inspectSlate = driver.$('//*[@resource-id="inspect-slate"]')
  const inspectHtml = driver.$('//*[@resource-id="inspect-html"]')

  await editable.click()
  await driver.pressKeyCode(AndroidKeys.KEYCODE_H, 1)
  await driver.pressKeyCode(AndroidKeys.KEYCODE_E)
  await driver.pressKeyCode(AndroidKeys.KEYCODE_L)
  await driver.pressKeyCode(AndroidKeys.KEYCODE_L)
  await driver.pressKeyCode(AndroidKeys.KEYCODE_O)

  expect(await editable.getText()).toBe('Hello')

  expect(JSON.parse(await inspectSlate.getText())).toEqual([
    {
      children: [{ text: 'Hello' }],
    },
  ])

  expect(await inspectHtml.getText()).toMatchInlineSnapshot(`
    "<div role="textbox" aria-multiline="true" id="editable" data-slate-editor="true" data-slate-node="value" contenteditable="true" zindex="-1" style="position: relative; white-space: pre-wrap; overflow-wrap: break-word;">
      <div data-slate-node="element" style="position: relative;">
        <span data-slate-node="text">
          <span data-slate-leaf="true">
            <span data-slate-string="true">Hello</span>
          </span>
        </span>
      </div>
    </div>"
  `)
})

test('it works 2', async () => {
  const editable = driver.$('//*[@resource-id="editable"]')
  const inspectSlate = driver.$('//*[@resource-id="inspect-slate"]')
  const inspectHtml = driver.$('//*[@resource-id="inspect-html"]')

  await editable.click()
  await driver.pressKeyCode(AndroidKeys.KEYCODE_H, 1)
  await driver.pressKeyCode(AndroidKeys.KEYCODE_I)
  await driver.pressKeyCode(AndroidKeys.KEYCODE_1, 1)

  expect(await editable.getText()).toBe('Hi!')

  expect(JSON.parse(await inspectSlate.getText())).toEqual([
    {
      children: [{ text: 'Hi!' }],
    },
  ])

  expect(await inspectHtml.getText()).toMatchInlineSnapshot(`
    "<div role="textbox" aria-multiline="true" id="editable" data-slate-editor="true" data-slate-node="value" contenteditable="true" zindex="-1" style="position: relative; white-space: pre-wrap; overflow-wrap: break-word;">
      <div data-slate-node="element" style="position: relative;">
        <span data-slate-node="text">
          <span data-slate-leaf="true">
            <span data-slate-string="true">Hi!</span>
          </span>
        </span>
      </div>
    </div>"
  `)
})
