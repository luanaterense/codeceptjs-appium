Feature('login')

const { I, login_page } = inject()
Scenario('Login efetuado com sucesso', ({I, login_page}) => {
    login_page.efetuarLogin('teste@teste.com', '123456');
    login_page.conferirLoginEfetuado();
}
)

Scenario('Usuário incorreto', ({I, login_page}) => {
    login_page.efetuarLogin('teste@teste', '123456');
    login_page.conferirLoginNaoEfetuado();
}
)

Scenario('Senha incorreta', ({I, login_page}) => {
    login_page.efetuarLogin('teste@teste.com', '123');
    login_page.conferirLoginNaoEfetuado();
}
)

Scenario('Usuário e senha não preenchidos', ({I, login_page}) => {
    login_page.efetuarLogin('', '');
    login_page.conferirLoginNaoEfetuado();
}
)
