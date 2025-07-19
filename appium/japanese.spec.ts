import { beforeAll, it } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.switchLanguage('japanese')
})

it('types a simple sentence', async () => {
  await driver.focus()
  await driver.type('a') // Workaround for Slate IME bug
  await driver.type('korehanihonngo ')

  await driver.expectValue([
    {
      children: [{ text: 'あこれは日本語' }],
    },
  ])
})
