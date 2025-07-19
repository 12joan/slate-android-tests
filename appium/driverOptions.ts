import path from 'path'

const apkPath = path.join(
  import.meta.dirname,
  '../app/build/outputs/apk/debug/app-debug.apk',
)

export const appPackage = 'org.slatejs.androidtests'
export const appActivity = '.MainActivity'

export const driverOptions = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'error',
  capabilities: {
    platformName: 'Android',
    'appium:app': apkPath,
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': appPackage,
    'appium:appActivity': appActivity,
  },
} as const
