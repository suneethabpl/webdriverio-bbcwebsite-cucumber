class newsPageObject {
    // static loadNewsPage() {
    //     cy.visit(Cypress.env('url') + "/news");
    //     cy.location('pathname').should('eq','//news');
    // }
   get  MainNavMenu() {
        return $$(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li a")[3].getText()
    }
get  newsPage() {
        // return $$(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li a")[3].click();
        return $('.ssrcss-1j2epfn-NavigationLink.eki2hvo6');
    }

    get localSearchHeading() {
        const h2 =
            $('.gel-double-pica-bold')
        let text = h2.getText();
        console.log(text);
        // assert.equal('Coronavirus explained', text);//global chaijs
        // expect(text).equals('Coronavirus explained');//global chaijs
    }
    get localSearch() {
        return $("#ls-c-search__input-label")
    }
    enterLocalPostcode(text) {
        this.localSearch.waitForDisplayed();
        this.localSearch.setValue(text);
    }
    pressEnterFromKeyboard(text) {
        this.localSearch.waitForDisplayed();
        this.localSearch.setValue(text);
    }
    get clickonSearch() {
        $('.ls-c-search__submit').click();
    }
    get changeLocationlink() {
        $("button.nw-c-local__button--light").click();
    }

    get changeAnotherLocation() {
        $$('.ls-c-locations-list-list').forEach((el) => {
            if (el.getText() === 'rm') {
                el.getText().click();
            }
        })

    }
    get goToAnotherLocation() {
        $$('.ls-c-locations-list-list li a')[3].click();
    }

    // clickElement(element) {
    //     // element.waitForDisplayed();
    //     element.click();
    // }

    //   get  changelocationLink() {
    //      $(".nw-c-local__button--light").getValue("Change location");
    //     }
    // static dynamicSearchForPostcode() {
    //     cy.get("#ls-c-search__input-label")
    //         .scrollIntoView();
    //     cy.get("#ls-c-search__input-label").should('be.enabled').type("rm6").type('{enter}');
    // }

    // static getTextForInAutoSearch() {
    //     cy.get('.nw-c-local__button--light').then((localnews) => {
    //         var localnewsvar = localnews.text();
    //         cy.wait(3000);
    //         cy.log(localnewsvar);
    //     })
    // }

    // static changelocationLink() {
    //     cy.get(".nw-c-local__button--light").contains("Change location").click();
    // }
    // static findLocationToChange() {

    //     cy.get("#ls-c-search__input-label").should('be.enabled').type("rm5").should('have.value', 'rm5').clear().should('have.value', '').type('rm');
    //     // cy.get('.ls-c-locations-list-list li a').find('span').contains('RM10, Postcode District').click();
    //     cy.get('.ls-c-locations-list-list').each(($el, index, $list) => {
    //         if ($el.text() === 'rm') {
    //             cy.wrap($el).click();
    //         }
    //     })
    // }
}
// export default newsPageObject;
module.exports = new newsPageObject();
