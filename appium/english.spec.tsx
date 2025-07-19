/** @jsx jsx */
import { jsx } from 'slate-hyperscript'
import { beforeAll, it } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.switchLanguage('english')
})

it('types a simple sentence', async () => {
  await driver.focus()
  await driver.type('This is English')

  await driver.expectValue(
    <editor>
      <element>
        This is English
        <cursor />
      </element>
    </editor>,
  )
})
