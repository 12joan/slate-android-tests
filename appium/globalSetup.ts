import { spawn, type ChildProcessWithoutNullStreams } from 'child_process'
import { appendFileSync, openSync } from 'fs'
import path from 'path'
import * as WebdriverIO from 'webdriverio'
import { TestProject } from 'vitest/node'

const apkPath = path.join(
  import.meta.dirname,
  '../app/build/outputs/apk/debug/app-debug.apk',
)

const appiumLogPath = path.join(import.meta.dirname, '../appium.log')

let appiumProcess: ChildProcessWithoutNullStreams
let driver: WebdriverIO.Browser

const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

const appiumLogFile = openSync(appiumLogPath, 'w')
const logAppium = (data: any) => appendFileSync(appiumLogFile, data.toString())

export const driverOptions = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'error',
  capabilities: {
    platformName: 'Android',
    'appium:app': apkPath,
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': 'org.slatejs.androidtests',
    'appium:appActivity': '.MainActivity',
  },
} as const

export async function setup(project: TestProject) {
  appiumProcess = spawn('appium', [
    // Using the Chrome driver to interact directly with web content would be
    // nice. Unfortunately, this doesn't work on some Android phones (Appium
    // incorrectly reports that the APK is not installed when trying to switch
    // to the web context).
    // '--allow-insecure',
    // 'chromedriver_autodownload',
  ])

  appiumProcess.stdout.on('data', logAppium)
  appiumProcess.stderr.on('data', logAppium)
  appiumProcess.on('error', logAppium)

  await wait(1000)

  driver = await WebdriverIO.remote(driverOptions)

  await driver.updateSettings({ waitForIdleTimeout: 10 })

  project.provide('sessionId', driver.sessionId)
}

export async function teardown() {
  await driver?.deleteSession()
  appiumProcess?.kill()
}
