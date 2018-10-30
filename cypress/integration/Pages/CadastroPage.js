class CadastroPage {

  Cadastro() {

  }

  visit() {
    cy.visit('cadastrar');
  }
    
  goToPf() {
    const pfSelect = cy.get('#pf_tab', {timeout: 15000});
  }
    
  fillEmail(value) {
    const field = cy.get('#email', {timeout: 15000});
    field.clear();
    field.type(value);
    
    return this;
  }
  
  submitAddress() {
    const button = cy.get('btn-endereco-pf', {timeout : 15000});
  }

}
  
  export default Cadastrar;