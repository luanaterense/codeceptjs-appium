const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    password: '~senha',
    search: '~search'
  },
  
  buttons:{
    enter: '~entrar',
  },

  efetuarLogin(email, password) {
    I.wait(2)
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.saveScreenshot('camposPreenchidosLogin.png')
    I.tap(this.buttons.enter)
  },

  conferirLoginEfetuado(){
    I.wait(2)
    I.waitForElement(this.fields.search)
    I.saveScreenshot('loginEfetuado.png')
  },

  conferirLoginNaoEfetuado(){
    I.see('Erro no login!')
    I.saveScreenshot('loginNaoEfetuado.png')
  }
}