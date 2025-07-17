import { spawn, type ChildProcessWithoutNullStreams } from 'child_process'
import path from 'path'
import { afterAll, beforeAll, expect, test } from 'vitest'
import * as WebdriverIO from 'webdriverio'
import {AndroidKeys} from './keycodes'

const apkPath = path.join(
  import.meta.dirname,
  '../app/build/outputs/apk/debug/app-debug.apk'
)

const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

let appiumProcess: ChildProcessWithoutNullStreams
let driver: WebdriverIO.Browser

beforeAll(async () => {
  appiumProcess = spawn('appium', [
    // Using the Chrome driver to interact directly with web content would be
    // nice. Unfortunately, this doesn't work on some Android phones (Appium
    // incorrectly reports that the APK is not installed when trying to switch
    // to the web context).
    // '--allow-insecure',
    // 'chromedriver_autodownload',
  ])

  appiumProcess.stdout.on('data', (data) => console.log(data.toString()))
  appiumProcess.stderr.on('data', (data) => console.log(data.toString()))
  appiumProcess.on('error', (data) => console.error(data.toString()))

  await wait(1000)

  driver = await WebdriverIO.remote({
    hostname: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities: {
      platformName: 'Android',
      'appium:app': apkPath,
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android',
      'appium:appPackage': 'org.slatejs.androidtests',
      'appium:appActivity': '.MainActivity',
    },
  })

  await driver.updateSettings({ waitForIdleTimeout: 10 })
})

afterAll(async () => {
  await driver?.deleteSession()
  appiumProcess?.kill()
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
