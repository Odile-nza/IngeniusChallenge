# API Automation with playwright
-Playwright is a node library to automate the chromium browsers with the JavaScript API
-Playwright enables fast, reliable, and capable automation across all modern browsers

# Support for all browsers
-Test on Chromium, Firefox, and WebKit
-Fast and reliable execution

# Environment setup
1. Installation
-Playwright framework requires Node.js v14+ to run.
-Installing the dependencies `npm i`.
-Installing visual studio editor.

2. Test creation
-create API_Challenge project folder.
-Open folder in visual studio editor.
-Run command `npm init playwright` in terminal.
-Choose the typescript language.
-Add the folder name where you want to keep your tests. By default, the folder name is ‘tests’.
-Choose if you want to add a Github Actions workflow to your project. By default, it is set to yes(Y).
-Playwright will install all dependencies.
-Execute the example test that was created during the installation using command `npx playwright test`.
-Add `reqres` folder in tests folder.
-Add  `api.spec.ts` file in reqres folder.
-Playwright will install all dependencies.

# Execution
-To run test in headed mode by using command `npx playwright test api --headed`.
