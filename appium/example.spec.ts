import { it } from 'vitest'
import { driver } from './driver'

it('types a couple of words', async () => {
  await driver.focus()
  await driver.type('Hello, world?', { delay: 100 })
  await driver.backspace(1, { delay: 100 })
  await driver.type('!')

  await driver.expectValue([
    {
      children: [{ text: 'Hello, world!' }],
    },
  ])
})
