
const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const newsPageObject = require("../pageobjects/newsPageObjects");
const expect = require('chai').expect;
const assert = require('chai').assert;
BeforeAll(function () {
    browser.url('/');
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
})
Given(/^I'm on the news  page$/, function () {
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
    expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/');
    newsPageObject.MainNavMenu;
    newsPageObject.newsPage;
    newsPageObject.newsPage.click();
    browser.pause(3000);
    browser.back();
    browser.pause(3000);
    browser.forward();
    browser.pause(3000);
    assert.equal(browser.getTitle(), 'Home - BBC News');//chaijs
})
When(/^Give local postcode to get local news$/, function () {
    newsPageObject.localSearchHeading;
    newsPageObject.localSearch.scrollIntoView();
    newsPageObject.localSearch.isDisplayedInViewport();
    newsPageObject.enterLocalPostcode("rm6");
    assert.equal('rm6', newsPageObject.localSearch.getValue());
    browser.pause(3000)
    newsPageObject.clickonSearch;
})
Then(/^Change postcode$/, () => {
    newsPageObject.changeLocationlink;
    newsPageObject.enterLocalPostcode("rm");
    browser.pause(3000)
    assert.equal('rm', newsPageObject.localSearch.getValue());
    newsPageObject.changeAnotherLocation;
    browser.pause(3000)
    newsPageObject.goToAnotherLocation;
    browser.pause(3000);
})


