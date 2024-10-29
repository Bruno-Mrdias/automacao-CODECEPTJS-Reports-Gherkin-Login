Feature: Login 
  I as user
  I want a login to the application
  To do orders

  Scenario: Login with success
    Given I have in a login screen
    And I filled the email field with  "matrs@gmail.com"
    And I filled the password fild with  "123456"
    When I click in login button 
    Then I am logged in the application and see the success message "Login realizado"

    Scenario: Login with wrong email
    Given I have in a login screen
    And I filled the email field with  "matrs"
    And I filled the password fild with  "123456"
    When I click in login button 
    Then I am logged in the application and see the error message "E-mail inválido."

    Scenario: Login with wrong password
    Given I have in a login screen
    And I filled the email field with  "matrs@gmail.com"
    And I filled the password fild with  "1234"
    When I click in login button 
    Then I am logged in the application and see the error message "Senha inválida."

    Scenario: Login with wrong email and password
    Given I have in a login screen
    And I filled the email field with  "matrs"
    And I filled the password fild with  "1234"
    When I click in login button 
    Then I am logged in the application and see the error message "E-mail inválido."

    Scenario: Login without filling in data
    Given I have in a login screen
    When I click in login button 
    Then I am logged in the application and see the error message "E-mail inválido."