// import bitesizePageObject from "../pageObjects/bitesizePageObject"
// const bitesize = new bitesizePageObject();


const { Given, When, Then } = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const threebbcPage  = require("../pageobjects/threebbcPageObjects");
const bitesizePageObject =require('../pageobjects/bitesizePageObject');
// constthreebbcPage  = new threebbcPage();

// import { expect,assert } from 'chai';
// import 'chai/register-should';
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
        //threebbcPage .ThreePage.moveTo();
//    threebbcPage.moveToElement(bitesizePageObject.BitesizePageOpen());
        // threebbcPage.moveToElement(threebbcPage.bitesizePageObject.BitesizePageOpen());

     
    bitesizePageObject.BitesizePageOpen();
    browser.pause(3000)
    // bitesizePageObject.BitesizePageOpen();
    // threebbcPage.moveToElement(bitesizePageObject.BitesizePageOpen());
    // bitesizePageObject.BitesizePageOpen().click();
    // bitesizePageObject.BitesizePageOpen().click();

        // expect((bitesizePageObject.BitesizePageOpen()).getTagName()).to.equal('a');
    //    threebbcPage.clickElement(bitesizePageObject.BitesizePageOpen());
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
