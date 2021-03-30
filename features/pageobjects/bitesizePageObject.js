class bitesizePageObject {
    // static loadBitesizePage() {
    // }

    static listOfMainNavMenu() {
        $$(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li")[6].getText();
        //  then((moreDropdownEle) => {
        //         cy.log(moreDropdownEle.text());
        //     })
    }
    static BitesizePageOpen() {
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[9].moveTo();
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[9].click();
        // // .find('li a').then(function (listitems) {
        // //         cy.log(listitems.text());
        //     // }).contains('Bitesize').click({ force: true });
    }


    static changeLanguageDropdown() {
        $$("div.global-language-selector")[0].click();
    }

    static childLanguageDropdown() {
        $$("div.global-language-selector__container")[0].getText();
        //   children().then((changeLanguageDropdown) => {
        //         cy.log(changeLanguageDropdown.text());
    }
    static englishDivDropdown() {
        $$(".global-language-selector__container ol li button")[1].click();
    }

    static selectEngLanguageDropdown() {
        $$("div.global-language-selector__container")
            // .find('span')
            .forEach((el) => {
                //we can iterate the loop by each method.
                if (el.getText() == 'English') {
                    el.click();
                }
            })
    }

}
// export default bitesizePageObject;
module.exports = bitesizePageObject ;