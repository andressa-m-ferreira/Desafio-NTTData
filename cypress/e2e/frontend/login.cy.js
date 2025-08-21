describe('Login do administrador', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
  })
  
  it('Login de admin bem sucedido (happy path)', () => {
    cy.fixture('credenciais').then(credenciais =>{
        cy.get('[data-testid="email"]').click().type(credenciais.admin.email)
        cy.get('[data-testid="senha"]').click().type(credenciais.admin.password)
    })
    cy.get('[data-testid="entrar"]').click()
    cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')
  })

  it('Login de admin inválido', () => {
    cy.fixture('credenciais').then(credenciais =>{
        cy.get('[data-testid="email"]').click().type(credenciais.adminInvalid.email)
        cy.get('[data-testid="senha"]').click().type(credenciais.adminInvalid.password)
    })
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })

  

})