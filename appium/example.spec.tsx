/** @jsx jsx */
import { jsx } from 'slate-hyperscript'
import { beforeAll, it } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.switchLanguage('english')
})

it('sets the value and selection', async () => {
  await driver.setValue(
    <editor>
      <element>
        Hello
        <anchor />, world?
        <focus />
      </element>
    </editor>,
  )

  await driver.type(' again!')

  await driver.expectValue(
    <editor>
      <element>
        Hello again!
        <cursor />
      </element>
    </editor>,
  )
})
