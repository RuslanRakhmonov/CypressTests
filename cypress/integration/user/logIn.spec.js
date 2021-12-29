/// <reference types="cypress" />

describe("Verify login functionality", function() {
    beforeEach('Open the application', function () {
        cy.fixture('example').then(function(data) {
            this.data = data;
        })
        cy.openSignInPage();
    });

    it('log in with valid email and password', function() {
        cy.get("#email").type(this.data.email);
        cy.get("#passwd").type(this.data.password);
        cy.get("span > i.icon-lock").click();
        cy.get('h1.page-heading').contains('My account');
    });

    it('log in with valid email and invalid password', function() {
        cy.get("#email").type(this.data.email);
        cy.get("#passwd").type(this.data.invalidPassword);
        cy.get("span > i.icon-lock").click();
        cy.get("ol > li").contains("Authentication failed.");
    });

    it('log in with invalid email and valid password', function() {
        cy.get("#email").type(this.data.invalidEmail);
        cy.get("#passwd").type(this.data.password);
        cy.get("span > i.icon-lock").click();
        cy.get("ol > li").contains("Authentication failed.");
    });

})