import { PageNavigation } from "../../Helpers/Navigation";
import { Login } from "../../Helpers/Settings";

describe('Autentification verification',() =>{
    let NavigateTo = new PageNavigation();
    beforeEach(() =>{
        NavigateTo.LoginPage();

    })
it('verification with valid credentials', () =>{
    Login("tomsmith", "SuperSecretPassword!");
    cy.get('#flash').invoke('text').should('include', 'You logged into a secure area');

});

it('Autentification with invalid username', () =>{
    Login("falseName", "SuperSecretPassword!");
    cy.get('#flash').invoke('text').should('include', 'Your username is invalid!')

});

it('Autentification with invalid password', () =>{
    Login("tomsmith", "FalsePassword!");
    cy.get('#flash').invoke('text').should('include', 'Your password is invalid!')
})
})