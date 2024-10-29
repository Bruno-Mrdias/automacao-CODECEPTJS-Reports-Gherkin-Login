const { button, fields } = require("./login_user");

const { I } = inject();

module.exports = {

  fields: {
    email:'#user'
  },

  loginPage(){
    I.amOnPage('/')
    I.wait(3)
    I.click('Login')
  }
  // insert your locators and methods here
}
