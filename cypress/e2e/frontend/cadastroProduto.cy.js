import 'cypress-file-upload';
describe('Cadastro de produtos', () => {
    beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
    })

    it('Admin  cadastra um novo produto', () => {
    cy.fixture('credenciais').then(credenciais =>{
        cy.get('[data-testid="email"]').click().type(credenciais.admin.email)
        cy.get('[data-testid="senha"]').click().type(credenciais.admin.password)
    })
    cy.get('[data-testid="entrar"]').click()

    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.get('h1').should('be.visible')

    const productName = `Smart TV ${Date.now()}`;
    cy.get('[data-testid="nome"]').type(productName)
    cy.get('[data-testid="preco"]').type('3.000,00')
    cy.get('[data-testid="descricao"]').type('Smart TV 50" 4K Ultra HD Samsung com processador Crystal 4K, Gaming Hub, AI Energy Mode, Alexa built-in, Wi-Fi, Bluetooth, USB e HDMI')
    cy.get('[data-testid="quantity"]').type('1')
    cy.get('[data-testid="imagem"]').attachFile('tv.jpeg')

    cy.get('[data-testid="cadastarProdutos"]').click();
    
    cy.contains(productName).should('be.visible');
  })
})