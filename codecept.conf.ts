import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/luana.terense/Documents/Projetos/appsqazando/app-release.apk',
      device: 'Emulator5554',
      platformVersion: '10',
      automationName: 'UiAutomator2'
    }
  },
  include: {
    I: './steps_file',
    login_page: './pages/login_page.js',
    login_elements: './elements/login_elements.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: "output",
    }
  },
  name: 'POCAppiumCodeceptJS',
  fullPromiseBased: false,
  plugins: {
    stepByStepReport: {
      enabled: true,
    },
    allure: {
      enabled: true,
    }
  }
} 