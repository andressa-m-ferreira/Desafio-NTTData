import { USER_ADMIN } from '../../support/constants'; 

describe('Testes de API - Login', () => {

    it('Deve realizar login com sucesso e obter um token de autenticação', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/login`,
            body: {
                email: USER_ADMIN.email,
                password: USER_ADMIN.password
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('message', 'Login realizado com sucesso');
            expect(response.body).to.have.property('authorization');
            expect(response.body.authorization).to.not.be.empty;

            Cypress.env('authToken', response.body.authorization);
        });
    });

    it('Deve falhar o login com credenciais inválidas', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/login`,
            failOnStatusCode: false, 
            body: {
                email: USER_ADMIN.email,
                password: 'senha_invalida'
            }
        }).then((response) => {
            expect(response.status).to.equal(401); 
            expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
        });
    });

});