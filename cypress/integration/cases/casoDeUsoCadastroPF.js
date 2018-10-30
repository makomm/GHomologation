import HomePage from '../integration/Pages/HomePage.js';
import HomePage from '../integration/Pages/CadastroPage.js';

describe('Gimba User Registration Test Page Object', () => {
  const email = Cypress.env('pfUser');
  const password = Cypress.env('password');

  it('should not register without email', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToUserRegistration();
    register.goToPf();

    register
      .fillPassword(password)
      .submit();

    login.getEmailError().should('be.visible');
  });

  it('should not register user without password', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToUserRegistration();
    register.goToPf();
    
    register
      .fillEmail(email)
      .submit();

    login.getPasswordError().should('be.visible');
  });

  it('should not sign in without email and password', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignIn();
    register.goToPf();

    register
      .submit();

    login.getEmailError().should('be.visible');
    login.getPasswordError().should('be.visible');
  });

});