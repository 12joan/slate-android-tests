/**
 * This file runs before each test file.
 */

import { beforeEach, beforeAll } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.connect()
})

beforeEach(async () => {
  await driver.refresh()
})
