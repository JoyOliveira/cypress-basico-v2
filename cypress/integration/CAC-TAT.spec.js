/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })


  it('verifica o título da aplicação', function () {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  it('preenche os campos obrigatórios com função, e envia o formulário', function () {
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

  it('campo telefone aceita apenas caracteres numéricos usando Contains', function(){
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
    cy.fillMandatoryFieldsAndSubmit
    cy.get('select').select(3).should('have.value', "mentoria")

  })

  it('selecionando campo por valor', function(){
    cy.fillMandatoryFieldsAndSubmit
    cy.get('select').select("Blog").should('have.value', "blog")

  })

  it('selecionando campo pelo indice', function(){
    cy.fillMandatoryFieldsAndSubmit
    cy.get('select').select(3).should('have.value', "mentoria")

  })

  it('selecionando valor aleatorio', function(){
   cy.get('select option')
    .as('options')
    .its('length', {log: false}).then(n => {
      cy.get('@options', {log:false}).then($options => {
        const randomOptionIndex = Cypress._.random(n-1)
        const randomOptionText = $options[randomOptionIndex].innerText
        cy.get('select').select(randomOptionText)
      })
    })

  })

  it('marca tipo de atendimento Feedback', function(){
    cy.fillMandatoryFieldsAndSubmit
      cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')

  })

  it.only('marca todos tipos de atendimento', function(){
    cy.fillMandatoryFieldsAndSubmit()

      cy.get('input[type="radio"]')
       .should('have.length', 3)
       .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
       })

  })

  })



