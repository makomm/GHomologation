import HomePage from '../Pages/HomePage.js';
import CadastroPage from '../Pages/HomePage.js';


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

// JS Functions to generate a random email
function generateRandomEmail() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for(var i = 0; i < 20; i++) {
    if(i === 13) {
      text += '@'
    } else {
      if(i === 16) {
        text += '.'
      } else {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
    }
  }

  return text;
}

// JS Functions to generate a random CPF
function getRandomNumber(n) {
  return Math.round(Math.random() * n);
}

function mod(dividendo, divisor) {
  return Math.round(dividendo - (Math.floor(dividendo/divisor) * divisor));
}

function generateCpf(pontuacao) {
  var cpf;
  var n = 9;
  var n1 = getRandomNumber(n);
  var n2 = getRandomNumber(n);
  var n3 = getRandomNumber(n);
  var n4 = getRandomNumber(n);
  var n5 = getRandomNumber(n);
  var n6 = getRandomNumber(n);
  var n7 = getRandomNumber(n);
  var n8 = getRandomNumber(n);
  var n9 = getRandomNumber(n);
  var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
  d1 = 11 - ( mod(d1,11) );
  if (d1>=10) d1 = 0;
  var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
  d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;
  
  return ""+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
  
}
