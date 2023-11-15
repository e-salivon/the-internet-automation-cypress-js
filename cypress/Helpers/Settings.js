export function Login(userName, password){
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.radius').click();
};