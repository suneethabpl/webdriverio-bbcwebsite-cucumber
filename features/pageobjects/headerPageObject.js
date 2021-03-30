class headerObject {
    // static loadHomeP(){
    //     // cy.visit(Cypress.env('url'));
    //     // cy.url().should('include','bbc');
    // }

    static getHeader(){
        $("//header[@id='header-content']");
           // .should('be.visible')
       }
    static displayedHeader(){
        $("//header[@id='header-content']").isDisplayed();
           // .should('be.visible')
       }
    static headerInAllPages(){
     $("//header[@id='header-content']").isExisting();
        // .should('be.visible')
    }
}
// export default headerObject;
module.exports = headerObject;