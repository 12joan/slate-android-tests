import path from 'path'

const apkPath = path.join(
  import.meta.dirname,
  '../app/build/outputs/apk/debug/app-debug.apk',
)

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
