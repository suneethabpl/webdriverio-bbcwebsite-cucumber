
const { Given, When, Then } = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const footerObject = require("../pageobjects/footerPageObject");
const expect = require('chai').expect;

    BeforeAll(function () {
        browser.url('/');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
    })
    Given(/^go to footer page$/, function () {
    footerObject.findFooter();
    })
    When(/^go to footer$/, function () {
        footerObject.VisibleFooter();
    })
    Then(/^retrive footer in all pages$/, () => {
        footerObject.footerOfAllPages();
    });

