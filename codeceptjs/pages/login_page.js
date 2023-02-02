const { I, login_elements } = inject();

module.exports = {

  efetuarLogin(email, password) {
    I.wait(2)
    I.fillField(login_elements.fields.email, email)
    I.fillField(login_elements.fields.password, password)
    I.saveScreenshot('camposPreenchidosLogin.png')
    I.tap(login_elements.buttons.enter)
  },

  conferirLoginEfetuado(){
    I.wait(2)
    I.waitForElement(login_elements.fields.search)
    I.saveScreenshot('loginEfetuado.png')
  },

  conferirLoginNaoEfetuado(){
    I.seeElement(login_elements.message.loginFail)
    I.saveScreenshot('loginNaoEfetuado.png')
  }
}