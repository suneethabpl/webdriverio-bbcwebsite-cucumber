// import footerObject from '../pageobjects/footerPageObject'
// import footerObject from '@pageObjects/footerObject'
const { Given, When, Then } = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const footerObject = require("../pageobjects/footerPageObject");
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
    // it('footer element ', () => {
    footerObject.findFooter();
    })
    When(/^go to footer$/, function () {
        footerObject.VisibleFooter();
    })
    Then(/^retrive footer in all pages$/, () => {
        footerObject.footerOfAllPages();
    });

