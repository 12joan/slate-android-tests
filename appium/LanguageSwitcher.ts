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
        await this.ensureLanguageByInput('English (US)', 'a', 'a')
        break

      case 'japanese':
        await this.ensureLanguageByInput('Japanese', 'a', 'あ')
        break
    }
  }

  private async ensureLanguageByInput(
    language: string,
    input: string,
    output: string,
  ) {
    if (await this.switchToLanguage(input, output, 2)) return

    await this.ensureLanguageEnabled(language)
    await this.driver.startSlateActivity()

    if (await this.switchToLanguage(input, output, 10)) return

    throw new Error(`Failed to switch to ${language}`)
  }

  protected abstract ensureLanguageEnabled(language: string): Promise<void>

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
  protected async ensureLanguageEnabled(language: string) {
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
    await this.driver.driver.$('//*[@text="ADD KEYBOARD"]').click()
    await this.driver.driver
      .$('//*[@content-desc="Search for a language"]')
      .click()
    await this.driver.driver
      .$('//android.widget.AutoCompleteTextView')
      .sendKeys([language])
    await this.driver.driver.pause(100)
    await this.driver.driver
      .$(`//android.widget.TextView[@text="${language}"]`)
      .click()
    await this.driver.driver.$('//*[@text="Done"]').click()
  }
}
