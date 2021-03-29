class newsPageObject {
   get  MainNavMenu() {
        return $$(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li a")[3].getText()
    }
get  newsPage() {
        return $('.ssrcss-1j2epfn-NavigationLink.eki2hvo6');
    }

    get localSearchHeading() {
        const h2 =
            $('.gel-double-pica-bold')
        let text = h2.getText();
        console.log(text);
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
        $$('.ls-c-locations-list-list li a span.gel-long-primer')[3].click();
    }
}
module.exports = new newsPageObject();
