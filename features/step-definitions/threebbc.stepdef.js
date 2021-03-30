

const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const threebbcPage = require("../pageobjects/threebbcPageObjects");
// constthreebbcPage  = new threebbcPage();

// import { expect,assert } from 'chai';
// import 'chai/register-should';
const expect = require('chai').expect;

BeforeAll(function () {
    browser.url('/');
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
    // newsPageObject.loadNewsPage();
    // cy.visit(cypress("url"));
    //we launch the site in beforeEach()hook because it needs to reat on every single method.
    //it's provided by mocha framework. it open before every test/it block. 
})

Given(/^I'm on the threebbc  page$/, function () {
    // browser.url('/');

    //    const title =threebbcPage .title;
    expect(browser.getTitle()).to.equal('BBC - Home');
    threebbcPage.parent();
    threebbcPage.childElements;
    threebbcPage.getTextForLi;
    threebbcPage.specifyChildElement(10);
    threebbcPage.getspecificChildElementText(11);
    threebbcPage.headingofpage;
    threebbcPage.MoreLink.click();
    threebbcPage.hiddenlist;
    threebbcPage.moveToElement(threebbcPage.MoreLink);
    threebbcPage.moveToElement(threebbcPage.childLinkDiv);
    threebbcPage.moveToElement(threebbcPage.ThreePage);
    //threebbcPage .MoreLink.moveTo();
    //threebbcPage .childLinkDiv.moveTo();
    //threebbcPage .ThreePage.moveTo();
    expect((threebbcPage.ThreePage).getTagName()).to.equal('a');
    threebbcPage.clickElement(threebbcPage.ThreePage);
    //threebbcPage .ThreePage.click();
    //threebbcPage .menuButton.should('have.css', 'top', '14px')
    //threebbcPage .moveToElement(threePage.menuButton);
    //threebbcPage .menuButton.moveTo();
    threebbcPage.clickElement(threebbcPage.menuButton);
    //  threebbcPage .menuButton.click();
    // expect(threebbcPage.menuButton).toBeClickable();//webdriverio expect
    expect(browser.getUrl()).includes('/bbcthree');
    expect(browser.getUrl()).to.include('/bbcthree');
    threebbcPage.documentaries;
    // expect(threebbcPage.documentaries).toBeClickable();//webdriverio expect
    expect(browser.getUrl()).includes('/bbcthree/category/docs')
    threebbcPage.title;
    expect(browser.getTitle()).to.equal('BBC Three | Docs, Comedies, Videos & Articles');
    browser.back();
    browser.pause(3000);
});
When(/^I retreive elements in dropdown list$/, function () {
    threebbcPage.threePageHeadings;
    threebbcPage.prticularHeadings;
    threebbcPage.prticularHeadingsbyIndex;
});
Then(/^Get all the list by using map method$/, function () {
    threebbcPage.listofheadingtextselector;
    threebbcPage.bbcthreePageListTextbyMap;
});


