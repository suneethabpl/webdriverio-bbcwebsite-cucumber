class footerObject {
    // static loadHomePage(){
    //     // cy.visit(Cypress.env('url'));
    //     // cy.url().should('include','bbc');
    // }
    static findFooter(){
        $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]');
    }
    static VisibleFooter(){
        $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]').isDisplayed();
    }
    static footerOfAllPages(){
          $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]').click();
        //   .should('be.visible').contains('Home').click();
    }
}
// export default footerObject;
module.exports = footerObject ;