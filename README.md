# Slate Android Tests

Integration tests for the Slate editor framework on Android.

https://github.com/user-attachments/assets/8afaa406-ee30-4b91-9c16-77d6c0125f4a

## Usage

I haven't tested these steps from scratch. Submit a PR if there are steps I've missed.

1. Clone this repo
2. Install Android Studio
3. Run `export ANDROID_HOME=<path to Android SDK>`
   - On my machine this path is `/Users/<username>/Library/Android/sdk`
4. Run `yarn install`, which should install (in addition to regular NPM dependencies):
   - Appium server
   - The `uiautomator2` driver for Appium
5. Run an Android emulator or connect a debuggable Android phone
   - Android Studio includes an emulator
6. Run `yarn test`, which will:
   1. Build a Vite application (`/client`) containing a Slate editor
   2. Bundle the client HTML and JS into an Android app's assets (`/app/src/main/assets`)
   3. Build the Android app (`/app`)
   4. Install the Android app on the Android device
   5. Start an Appium server (`/appium`)
   6. Start an Appium session that launches the Android app
   7. Run the tests
   8. Stop the Appium server

## Plan

The goal for these tests is to ensure that Slate remains usable on Android devices, and to give contributors to Slate confidence that by fixing one Android bug, they are not causing a regression to a bug that has already been fixed.

Many of these tests will require testing input using a non-English IME such as Chinese or Japanese. In order to enable and switch to these input languages, we will need to use Appium to open the keyboard application's settings activity and control its UI to enable the correct input language for the current batch of tests.

Once the test suite is mature, we will adapt it to run on [BrowserStack App Automate](https://www.browserstack.com/app-automate) as part of Slate's CI tests. This will ensure ongoing compatibility with all Android devices and versions supported by Slate.

App Automate currently costs 2,400 USD per year (when billed annually), which we hope to fund through yearly donations from companies using Slate. If your company is interested in donating to fund our use of App Automate for these Android tests, thanks very much! Send me an email or message me (Joe Anderson) on Slack with your email address, and we'll reach out to you once we're ready to start collecting money. The actual collection will most likely be done by Dylan Schiemann, the maintainer of Slate.

## Roadmap

- [x] Proof of concept
- [x] Test helpers (to populate the editor, select points, send keystrokes, validate the Slate value and DOM, etc.)
- [x] Programatically changing keyboard input language
  - [ ] Improve support for changing input language on a wider range of devices (https://github.com/12joan/slate-android-tests/issues/2, https://github.com/12joan/slate-android-tests/issues/3)
- [ ] Tests for frequently occurring Android bugs
- [ ] Integration with App Automate
- [ ] Inclusion in Slate's CI tests
- [ ] Support for iOS tests
