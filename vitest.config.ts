import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    dir: 'appium',
    testTimeout: 60_000,
    hookTimeout: 60_000,
    globalSetup: 'appium/globalSetup.ts',
    setupFiles: 'appium/setup.ts',
    maxWorkers: 1,
    retry: 2,
  },
})
