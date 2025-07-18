/**
 * This file runs before all test files. It runs in a separate Node process, so
 * we can only share serializable data.
 */

import { spawn, type ChildProcessWithoutNullStreams } from 'child_process'
import { appendFileSync, openSync } from 'fs'
import path from 'path'
import * as WebdriverIO from 'webdriverio'
import { TestProject } from 'vitest/node'
import { driverOptions } from './driverOptions'

const appiumLogPath = path.join(import.meta.dirname, '../appium.log')

let appiumProcess: ChildProcessWithoutNullStreams
let driver: WebdriverIO.Browser

const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

const appiumLogFile = openSync(appiumLogPath, 'w')
const logAppium = (data: any) => appendFileSync(appiumLogFile, data.toString())

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
