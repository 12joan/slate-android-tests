import type { Driver } from './driver'

export type Language = 'english' | 'japanese'

export abstract class LangaugeSwitcher {
  driver: Driver

  constructor(driver: Driver) {
    this.driver = driver
  }

  async ensureLanguage(languageId: Language) {
    switch (languageId) {
      case 'english':
        await this.ensureLanguageByInput('a', 'a', ['English (US)'])
        break

      case 'japanese':
        await this.ensureLanguageByInput('a', 'あ', ['Japanese', '日本語'])
        break
    }
  }

  private async ensureLanguageByInput(
    input: string,
    output: string,
    languageNames: string[],
  ) {
    if (await this.switchToLanguage(input, output, 2)) return

    await this.ensureLanguageEnabled(languageNames)
    await this.driver.startSlateActivity()

    if (await this.switchToLanguage(input, output, 10)) return

    throw new Error(`Failed to switch to ${languageNames[0]}`)
  }

  protected abstract ensureLanguageEnabled(languageNames: string[]): Promise<void>

  private async switchToLanguage(
    input: string,
    output: string,
    maxTries = 1,
  ): Promise<boolean> {
    await this.driver.focus()

    for (let i = 0; i < maxTries; i++) {
      if (i > 0) {
        await this.driver.cycleLanguage()
      }

      await this.driver.type(input)
      const text = await this.driver.getPlainText()
      if (text.endsWith(output)) return true
    }

    return false
  }
}

export class GboardLanguageSwitcher extends LangaugeSwitcher {
  protected async ensureLanguageEnabled(languageNames: string[]) {
    const [language] = languageNames;

    // Open Gboard settings
    await this.driver.driver.startActivity(
      'com.google.android.inputmethod.latin',
      'com.google.android.apps.inputmethod.latin.preference.SettingsActivity',
    )

    await this.driver.driver.$('//*[@text="Languages"]').click()

    // Check if the language is already enabled
    if ((await this.driver.driver.$$(`//*[@text="${language}"]`).length) > 0)
      return

    // Enable the language
    await this.driver.driver.$('//*[@text="ADD KEYBOARD" or @text="Add keyboard"]').click()
    await this.driver.driver
      .$('//*[@text="Search language" or @content-desc="Search for a language"]')
      .click()
    await this.driver.driver
      .$('//android.widget.AutoCompleteTextView | //android.widget.EditText')
      .sendKeys([language])
    await this.driver.driver.pause(100)
    await this.driver.driver
      .$(`//android.widget.TextView[${languageNames.map(l => `@text="${l}"`).join(' or ')}]`)
      .click()
    await this.driver.driver.$('//*[@text="Done"]').click()
  }
}
