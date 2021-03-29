

const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const threebbcPage = require("../pageobjects/threebbcPageObjects");
const expect = require('chai').expect;

BeforeAll(function () {
    browser.url('/');
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
})

Given(/^I'm on the threebbc  page$/, function () {
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
    expect((threebbcPage.ThreePage).getTagName()).to.equal('a');
    threebbcPage.clickElement(threebbcPage.ThreePage);
    threebbcPage.clickElement(threebbcPage.menuButton);
    expect(browser.getUrl()).includes('/bbcthree');
    expect(browser.getUrl()).to.include('/bbcthree');
    threebbcPage.documentaries;
    expect(browser.getUrl()).includes('/bbcthree/category/docs')
    threebbcPage.title;
    expect(browser.getTitle()).to.equal('BBC Three | Docs, Comedies, Videos & Articles');
    browser.back();
    browser.pause(3000);
});
When(/^I retreive particular heading in list$/, function () {
    threebbcPage.threePageHeadings;
    threebbcPage.prticularHeadings;
    threebbcPage.prticularHeadingsbyIndex;
});
Then(/^Get all the list by using map method$/, function () {
    threebbcPage.listofheadingtextselector;
    threebbcPage.bbcthreePageListTextbyMap;
});


