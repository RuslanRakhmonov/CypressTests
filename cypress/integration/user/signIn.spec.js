/// <reference types="cypress" />
const faker = require("faker"); 
const email = faker.internet.email();
const userName = faker.name.firstName();
let password = 'Password@123'

describe('verify Sign In functionality', function () {
    beforeEach('Open the application', function () {
        cy.openSignInPage();
    });

    function generateRandomChars() {
        let randomEmail = (Math.random() + 1).toString(36).substring(2) + '@gmail.com';
        return randomEmail;
    }

    it.only('open Create account page', function () {
        cy.get('a.login').click();
        cy.get("h1[class='page-heading']").should('be.visible');
        cy.get('#email_create').type(email);
        cy.get('span > i.icon-user').click();
        cy.get("label[for^='customer_f']").should('be.visible');
    });

    it.only('Fill in personal information form', function () {
        cy.get('a.login').click();
        cy.get("h1[class='page-heading']").should('be.visible');
        cy.get('#email_create').type(email);
        cy.get('span > i.icon-user').click();
        cy.get("label[for^='customer_f']").should('be.visible');
        cy.get('input#id_gender1').check();
        cy.get("input[name^='customer_first']").type('TestCustomerFirstName');
        cy.get("input[name^='customer_last']").type('TestCustomerLasttName');
        cy.get("input[type^='pass']").type(password);
        cy.get('select#days').select(18);
        cy.get('select#months').select('May');
        cy.get('select#years').select('1993');
        cy.get("input[name^='news']").check();
        cy.get("input[name^='opt']").check();
        cy.get("input[name^='comp']").type('TestCompanyName');
        cy.get("input[name='address1']").type('TesteAddress');

    });
})