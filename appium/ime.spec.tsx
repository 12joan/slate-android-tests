/** @jsx jsx */
import { jsx } from 'slate-hyperscript'
import { beforeAll, expect, it } from 'vitest'
import { driver } from './driver'

beforeAll(async () => {
  await driver.switchLanguage('japanese')
})

it('types a simple sentence', async () => {
  await driver.setValue(
    <editor>
      <element>
        Type here: [<cursor />]
      </element>
    </editor>,
  )

  await driver.type('korehanihonngo \n')

  await driver.expectValue(
    <editor>
      <element>
        Type here: [これは日本語
        <cursor />]
      </element>
    </editor>,
  )
})

it('updates the Slate value during composition', async () => {
  await driver.setValue(
    <editor>
      <element>
        Type here: [<cursor />]
      </element>
    </editor>,
  )

  await driver.type('korehanihonngo ')

  await driver.expectValue(
    <editor>
      <element>
        Type here: [これは日本語
        <cursor />]
      </element>
    </editor>,
  )

  expect(await driver.isComposing()).toBeTruthy()

  // Press enter to finish composition
  await driver.type('\n')

  await driver.expectValue(
    <editor>
      <element>
        Type here: [これは日本語
        <cursor />]
      </element>
    </editor>,
  )

  expect(await driver.isComposing()).toBeFalsy()
})

// https://github.com/ianstormtaylor/slate/issues/5883
it.skip('composes correctly at the start of a block', async () => {
  await driver.setValue(
    <editor>
      <element>
        <text />
      </element>

      <element>
        <cursor />
      </element>
    </editor>,
  )

  await driver.type('nihonngo \n')

  await driver.expectValue(
    <editor>
      <element>
        <text />
      </element>

      <element>
        日本語
        <cursor />
      </element>
    </editor>,
  )
})

// https://github.com/ianstormtaylor/slate/issues/5883
it.skip('composes correctly at the start of the editor', async () => {
  await driver.setValue(
    <editor>
      <element>
        <cursor />
      </element>
    </editor>,
  )

  await driver.type('nihonngo \n')

  await driver.expectValue(
    <editor>
      <element>
        日本語
        <cursor />
      </element>
    </editor>,
  )
})
