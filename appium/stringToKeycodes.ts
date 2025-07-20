import { AndroidKeys } from './keycodes'

export interface Keycode {
  keycode: number
  shift: boolean
}

const specialCharacters: Record<string, Keycode | number> = {
  ' ': AndroidKeys.KEYCODE_SPACE,
  '\n': AndroidKeys.KEYCODE_ENTER,
  '.': AndroidKeys.KEYCODE_PERIOD,
  ',': AndroidKeys.KEYCODE_COMMA,
  '!': { keycode: AndroidKeys.KEYCODE_1, shift: true },
  '?': { keycode: AndroidKeys.KEYCODE_SLASH, shift: true },
  ':': { keycode: AndroidKeys.KEYCODE_SEMICOLON, shift: true },
  '[': { keycode: AndroidKeys.KEYCODE_LEFT_BRACKET, shift: true },
  ']': { keycode: AndroidKeys.KEYCODE_RIGHT_BRACKET, shift: true },
}

export function stringToKeycodes(input: string): Keycode[] {
  return input.split('').map((character) => {
    if (/[a-zA-Z0-9]/.test(character)) {
      const keycode = getAlphanumericKeycode(character)
      const shift = /[A-Z]/.test(character)
      return { keycode, shift }
    }

    const specialCharacter = specialCharacters[character]

    if (specialCharacter === undefined) {
      throw Error(`Unsupported character '${character}'`)
    }

    if (typeof specialCharacter === 'number') {
      return { keycode: specialCharacter, shift: false }
    }

    return specialCharacter
  })
}

function getAlphanumericKeycode(character: string) {
  const key = `KEYCODE_${character.toUpperCase()}`
  return AndroidKeys[key as keyof typeof AndroidKeys]
}
