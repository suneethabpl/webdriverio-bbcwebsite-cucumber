
const { Given, When, Then } = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const headerObject = require("../pageobjects/headerPageObject");
const expect = require('chai').expect;

    BeforeAll(function () {
        browser.url('/');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
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

