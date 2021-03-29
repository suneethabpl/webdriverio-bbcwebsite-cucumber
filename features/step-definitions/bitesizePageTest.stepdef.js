
const { Given, When, Then } = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const threebbcPage  = require("../pageobjects/threebbcPageObjects");
const bitesizePageObject =require('../pageobjects/bitesizePageObject');
const expect = require('chai').expect;

    BeforeAll(function () {
        browser.url('/');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
    })
    Given(/^I'm on the bitesize  page$/, function(){
    bitesizePageObject.listOfMainNavMenu();
       threebbcPage.MoreLink.click();
       threebbcPage.hiddenlist;
       threebbcPage.moveToElement(threebbcPage.MoreLink);
       threebbcPage.moveToElement(threebbcPage.childLinkDiv);
       browser.pause(3000)
    bitesizePageObject.BitesizePageOpen();
    browser.pause(3000)
    })
       When(/^I retreive elements in dropdown list$/, function(){

        bitesizePageObject.childLanguageDropdown();
        bitesizePageObject.changeLanguageDropdown();
        browser.pause(3000);
       })
       Then(/^Select particular language in the list$/, ()=>{
        bitesizePageObject.englishDivDropdown();
        browser.pause(3000);
        bitesizePageObject.selectEngLanguageDropdown();
    })
