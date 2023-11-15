export class PageNavigation{
    LoginPage(){
        cy.visit('/');
        cy.contains('Form Authentication').click();
    }
}