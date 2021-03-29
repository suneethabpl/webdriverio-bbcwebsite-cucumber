class bitesizePageObject {
  

    static listOfMainNavMenu() {
        $$(".ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0 li")[6].getText();
    }
    static BitesizePageOpen() {
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[9].moveTo();
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[9].click();
    }


    static changeLanguageDropdown() {
        $$("div.global-language-selector")[0].click();
    }

    static childLanguageDropdown() {
        $$("div.global-language-selector__container")[0].getText();
    }
    static englishDivDropdown() {
        $$(".global-language-selector__container ol li button")[1].click();
    }

    static selectEngLanguageDropdown() {
        $$("div.global-language-selector__container")
            .forEach((el) => {
                if (el.getText() == 'English') {
                    el.click();
                }
            })
    }

}
module.exports = bitesizePageObject ;