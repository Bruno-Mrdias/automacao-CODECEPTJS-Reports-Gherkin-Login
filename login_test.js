const { faker } = require('@faker-js/faker');

Feature('login');

Scenario('Login with success',  ({ I,login_user, home_page }) => {

    //homePage
   home_page.loginPage()

    //teste login
    login_user.loginUser(faker.internet.email(), secret(faker.internet.password({length: 6 })))
}).tag('@teste1')

Scenario('Login with wrong email',  ({ I,login_user , home_page}) => {

    //homePage
    home_page.loginPage()

    //teste login
    login_user.loginUserError()
}).tag('@teste2')

Scenario('Login with wrong password',  ({ I,login_user, home_page }) => {

    //homePage
    home_page.loginPage()

    //teste login
    login_user.loginPassError()
}).tag('@teste3')

Scenario('Login with wrong email and password',  ({ I,login_user, home_page }) => {

    //homePage
    home_page.loginPage()

    //teste login
    login_user.loginWrongUser()
}).tag('@teste4')

Scenario('Login without filling in data',  ({ I,login_user, home_page }) => {

    //homePage
    home_page.loginPage()
    
    //teste login
    login_user.loginUserFail()
}).tag('@teste5')
