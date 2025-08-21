import { USER_ADMIN } from '../../support/constants';
import { faker } from '@faker-js/faker'; 

describe('Testes de API - Produtos Autenticados', () => {

    let authToken; 
 
    beforeEach(() => {
        cy.apiLogin(USER_ADMIN.email, USER_ADMIN.password); 
        cy.get('@authToken').then((token) => { 
            authToken = token;
        });
    });

    it('Cenário 3: Deve cadastrar um novo produto com sucesso', () => {
        const productName = faker.commerce.productName();
        const productPrice = faker.commerce.price();
        const productDescription = faker.commerce.productDescription();
        const productQuantity = faker.number.int({ min: 1, max: 100 });

        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/produtos`,
            headers: {
                Authorization: authToken
            },
            body: {
                nome: productName,
                preco: productPrice,
                descricao: productDescription,
                quantidade: productQuantity
            }
        }).then((response) => {
            expect(response.status).to.equal(201); // Created
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(response.body).to.have.property('_id'); 
        });
    });

});