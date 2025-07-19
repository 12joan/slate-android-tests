/** @jsx jsx */
import { jsx } from 'slate-hyperscript'
import { beforeAll, it } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.switchLanguage('japanese')
})

it('types a simple sentence', async () => {
  await driver.focus()
  await driver.type('a') // Workaround for Slate IME bug
  await driver.type('korehanihonngo ')

  await driver.expectValue(
    <editor>
      <element>
        あこれは日本語
        <cursor />
      </element>
    </editor>,
  )
})
