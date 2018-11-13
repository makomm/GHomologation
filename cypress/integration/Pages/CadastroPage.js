import HomePage from '../Pages/HomePage.js';

class CadastroPage {

  visit() {
    cy.visit('cadastrar');
  }
    

  chosePf() {
    const pfSelect = cy.get('#pf_tab', {timeout: 15000});
    return pfSelect;
  }
    
  fillEmail(value) {
    const field = cy.get('#input-email-pf', {timeout: 15000});
    field.clear();
    field.type(value);
    
    return this;
  }
  
  fillPassword(value) {
    const field = cy.get('#input-senha-pf', {timeout: 15000});
    field.clear();
    field.type(value);
    
    return this;
  }

  fillName(value) {
    const field = cy.get('#input-nome-pf', {timeout: 15000});
    field.clear();
    field.type(value);
    
    return this;
  }

  fillCpf(value) {
    const field = cy.get('#input-cpf-pf', {timeout: 15000});
    field.clear();
    field.type(value);
    
    return this;
  }

  fillCellphone(value) {
    const field = cy.get('#input-tel-celular-pf');
    field.clear();
    field.type(value);

    return this;
  }

  fillBirthDate(value) {
    const field = cy.get('#input-dt-nascimento-pf');
    field.clear();
    field.type(value);

    return this;
  }

  checkGender(value) {
    const field = cy.get('[type="radio"]').first().check();
    
    field.check();

    return this;
  }

  fillCep(value) {
    const field = cy.get('#input-cep-pf');
    field.clear();
    field.type(value);

    return this;
  }

  fillAddressNumber(value) {
    cy.wait(5000);
    const field = cy.get('#input-numero-pf');
    field.clear();
    field.type(value);

    return this;
  }

  submitAddress() {
    const button = cy.get('#btn-endereco-pf', {timeout : 15000});
    button.click();
    return this;
  }

  submit() {
    const button = cy.get('#btn-cadastrar-pf', {timeout: 15000});
    button.click();
  }

  getEmailNullError() {
    return cy.contains("Email obrigatório");
  }

  getEmailRegisteredError() {
    return cy.contains("Email já registrado");
  }

  getPasswordError() {
    return cy.contains("Senha obrigatória");
  }

  getNameError() {
    return cy.contains("Nome obrigatório");
  }

  getCPFError() {
    return cy.contains("CPF obrigatório");
  }

  getTelephoneError() {
    return cy.contains("Telefone obrigatório");
  }

  getGendererror() {
    return cy.contains("Gênero obrigatório");
  }

  getDateRangeError() {
    return cy.contains("Data inválida");
  }

  getDateNullError() {
    return cy.contains("Data de Nacimento obrigatório");
  }

  getCEPError() {
    return cy.contains("CEP obrigatório");
  }

  getNumeroError() {
    return cy.contains("Numero obrigatório");
  }

}
  
  export default CadastroPage;