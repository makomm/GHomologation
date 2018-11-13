import HomePage from '../Pages/HomePage.js';
import CadastroPage from '../Pages/HomePage.js';
import Utils from '../utils/utils.js';


describe('Gimba User Registration Test Page Object', () => {
  const email = Cypress.env(generateRandomEmail());
  const registeredEmail = Cypress.env('pfUser');
  const password = Cypress.env('password');
  const name = Cypress.env('name');
  const cellphone = Cypress.env('cellphone');
  const birthdate = Cypress.env('birthdate');
  const invalidBirthdate = Cypress.env('invalidBirthdate');
  const gender = Cypress.env('gender');
  const cep = Cypress.env('cep');
  const addrNum = Cypress.env('addressNumber');

  it('should not register without email', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();

    register
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();

    register.getEmailNullError().should('be.visible');
  });

  it('should not register user without password', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();
    
    register
      .fillEmail(email)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();

    register.getPasswordError().should('be.visible');
  });

  it('should not register without a name', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();
    register.getNameError().should('be.visible');
  });

  it('should not register without a CPF', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();
    register.getCPFError().should('be.visible');
  });

  it('should not register without a cellphone', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();
    register.getTelephoneError().should('be.visible');
  });

  it('should not register without date of birth', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();

    register.getDateNullError().should('be.visible');
  });

  it('should not register with an invalid date of birth', () => {
    const home = new HomePage();
    home.visit();
    
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(invalidBirthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();

    register.getDateRangeError().should('be.visible');
  });

  it('should not register without gender', () => {
    const home = new HomePage();
    home.visit();
  
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillDataName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();

      register.getDateError().should('be.visible');
});

  it('should not register without street number', () => {
    const home = new HomePage();
    home.visit();
  
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .submit();

    register.getNumeroError().should('be.visible');
  
  });

  it('should not register without a CEP', () => {
    const home = new HomePage();
    home.visit();
  
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .submit();

    register.getCEPError().should('be.visible');
  
  });

  it('should not register when email is already registered', () => {
    const home = new HomePage();
    home.visit();
  
    const register = home.goToSignUp();

    register
      .fillEmail(email)
      .fillPassword(password)
      .fillName(name)
      .fillCpf(generateCpf())
      .fillCellphone(cellphone)
      .fillBirthDate(birthdate)
      .checkGender(gender)
      .fillCep(cep)
      .submitAddress()
      .fillAddressNumber(addrNum)
      .submit();

      register.getEmailRegisteredError().should('be.visible');
});

    it('should register when all required fields are filled', () => {
      const home = new HomePage();
      home.visit();
    
      const register = home.goToSignUp();

      register
        .fillEmail(generateRandomEmail())
        .fillPassword(password)
        .fillName(name)
        .fillCpf(generateCpf())
        .fillCellphone(cellphone)
        .fillBirthDate(birthdate)
        .checkGender(gender)
        .fillCep(cep)
        .submitAddress()
        .fillAddressNumber(addrNum)
        .submit();

      home.getLogoutButton().should('be.visible');
  });
});