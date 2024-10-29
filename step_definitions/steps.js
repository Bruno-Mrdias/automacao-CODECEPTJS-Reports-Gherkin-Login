const { I } = inject();
// Add in your custom step files


Given('I have in a login screen', () => {

  I.amOnPage('/')
  I.wait(3)
  I.click('Login')
});

Given('I filled the email field with  {string}', (email) => {
  I.fillField('#user', email)
});

Given('I filled the password fild with  {string}', (senha) => {
  I.fillField('#password', senha)
});

When('I click in login button', () => {
  I.click('#btnLogin')
});

Then('I am logged in the application and see the success message {string}', (successMessage) => {
  I.see(successMessage)
});

Then('I am logged in the application and see the error message {string}', (message) => {
  I.see(message)
});
