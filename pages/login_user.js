const { I } = inject();

module.exports = {

  // insert your locators and methods here
fields: {
  user: '#user',
  senha: '#password'
},

button:{
  logbtn: '#btnLogin'
},


loginUser(){
  I.fillField(this.fields.user, 'matrs@gmail.com')
  I.fillField(this.fields.senha, secret('123456'))
  I.click(this.button.logbtn)
  I.waitForElement('.swal2-title', 5)
},

loginUserError(){
  I.fillField(this.fields.user, 'matrs')
  I.fillField(this.fields.senha, secret('123456'))
  I.click(this.button.logbtn)
  I.see('E-mail inválido.')
},

loginPassError(){
  I.fillField(this.fields.user, 'matrs@gmail.com')
  I.fillField(this.fields.senha, secret('1234'))
  I.click(this.button.logbtn)
  I.see('Senha inválida.')
},

loginUserFail(){
  I.click(this.button.logbtn)
  I.see('E-mail inválido.')
},

loginWrongUser(){
  I.fillField(this.fields.user, 'matrs')
  I.fillField(this.fields.senha, secret('1234'))
  I.click(this.button.logbtn)
  I.see('E-mail inválido.')
},
}
