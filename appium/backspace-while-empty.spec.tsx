/** @jsx jsx */
import { jsx } from 'slate-hyperscript'
import { beforeAll, it } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.switchLanguage('english')
})

it('presses backspace while empty', async () => {
  await driver.focus()
  await driver.type('a')
  await driver.backspace(2)

  await driver.expectValue(
    <editor>
      <element>
        <cursor />
      </element>
    </editor>,
  )
})
