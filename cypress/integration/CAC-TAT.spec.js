/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })


  it('verifica o título da aplicação', function () {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  it.only('preenche os campos obrigatórios com função, e envia o formulário', function () {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('input[id="firstName"]').type('Maria', { delay:200 }).should('have.value', 'Maria')
    cy.get('input[id="lastName"]').type('Silva').should('have.value', 'Silva')
    cy.get('input[id="email"]').type('teste.com')//.should('have.value', 'teste@teste.com')
    cy.get('input[id="phone"]').type('12988654443').should('have.value', '12988654443')
    cy.get('#open-text-area').type('teste').should('have.value', 'teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })

  it.only('campo telefone aceita apenas caracteres numéricos usando Contains', function(){
    cy.get('input[id="firstName"]').type('Maria', { delay:200 })
    cy.get('input[id="lastName"]').type('Silva')
    cy.get('input[id="email"]').type('teste@teste.com')
    cy.get('input[id="phone"]').type('11975445643')
    cy.get('#open-text-area').type('teste')
    cy.contains('button',"Enviar").click()

    cy.get('.success').should('be.visible')
  
  })


  it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
    cy.get('input[id="firstName"]').type('Maria', { delay: 1500 }).should('have.value', 'Maria').clear().should('have.value', '')
    cy.get('input[id="lastName"]').type('Silva').should('have.value', 'Silva').clear().should('have.value', '')
    cy.get('input[id="email"]').type('teste@teste.com').should('have.value', 'teste@teste.com').clear().should('have.value', '')
    cy.get('input[id="phone"]').type('12988654443').should('have.value', '12988654443').clear().should('have.value', '')

  })


  it('envia o formuário com sucesso usando um comando customizado', function(){

  })

  

  })



