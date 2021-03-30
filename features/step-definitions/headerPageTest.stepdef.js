// import headerObject from '../pageobjects/headerPageObject'
// import headerObject from '@pageObjects/headerObject'
const { Given, When, Then } = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const headerObject = require("../pageobjects/headerPageObject");
const expect = require('chai').expect;

    BeforeAll(function () {
        browser.url('/');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
        // newsPageObject.loadNewsPage();
        // cy.visit(cypress("url"));
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })
    Given(/^go to home page$/, function () {
        headerObject.getHeader();
    })
    When(/^go to header$/, function () {
    headerObject.displayedHeader();
    })
    Then(/^retrive header in all pages$/, () => {
       headerObject.headerInAllPages();
    });

