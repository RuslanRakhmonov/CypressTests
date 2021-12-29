/// <reference types="cypress" />
const faker = require("faker"); 
const email = faker.internet.email();
const userName = faker.name.firstName();
let password = 'Password@123'

describe('verify Sign In functionality', function () {
    beforeEach('Open the application', function () {
        cy.openSignInPage();
    });

    it('open Create account page', function () {
        cy.get('a.login').click();
        cy.get("h1[class='page-heading']").should('be.visible');
        cy.get('#email_create').type(email);
        cy.get('span > i.icon-user').click();
        cy.get("label[for^='customer_f']").should('be.visible');
    });

    it('Fill in personal information form', function () {
        cy.get('a.login').click();
        cy.get("h1[class='page-heading']").should('be.visible');
        cy.get('#email_create').type(email);
        cy.get('span > i.icon-user').click();
        cy.get("input[name^='customer_first']", { timeout: 10000 }).should('be.visible');
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
        cy.get("input[name='address1']").type('TesteAddress1');
        cy.get("input[name='address2']").type('TesteAddress2');
        cy.get("input[name='city']").type('TestCity');
        cy.get('#id_state').select('Colorado');
        cy.get('#id_state').contains('Colorado');
        cy.get('#postcode').type('90210');
        cy.get('#id_country').select('United States');
        cy.get('#other').type('Test Additional information');
        cy.get('#phone').type('123456789');
        cy.get('#phone_mobile').type('123456789');
        cy.get('#alias').type('Test alias address');
        cy.get("div[class='submit clearfix']")
        .contains('Register').click();
        /* For some reason demo web application clears
        / password and state fields after Clicking on Register button
          that's why I have to fill up them agan to proceed further*/
        cy.get('#id_state').select('Colorado');
        cy.get("div[class='submit clearfix']")
        .contains('Register').click();
        cy.get("input[type^='pass']").type(password);
        cy.get("div[class='submit clearfix']")
        .contains('Register').click();
        cy.get('h1.page-heading').contains('My account');
    });
})