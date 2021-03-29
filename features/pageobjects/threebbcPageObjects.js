

class threebbcPage {
    get  title() {
        const title = browser.getTitle();
    
    }
    parent() {
        return $('ul.ssrcss-1ceb9ru-GlobalNavigationLinkList-En.e1b8fg8n0');
    }
    get  childElements() {
        return this.parent().$$('li');
    }
    get  getTextForLi() {
        return this.childElements.filter(element => {
            element.getText();
        });
    }
    specifyChildElement(index) {
        return this.parent().$(`li:nth-child(${index})`)
    }
    getspecificChildElementText(index) {
        return this.specifyChildElement(index).getText();
        browser.pause(5000);
    }

    get  headingofpage() {
        const h2 = $('div.ssrcss-cl4b5i-MastheadText.e9p57e2');
        let text = h2.getText();
        console.log(text);
    }
    get  MoreLink() {
        return $('.ssrcss-sa2skc-MenuLabel.eki2hvo14')
    }
    get  hiddenlist() {
        return $$('div.ssrcss-1mklhpx-MenuWrapper.eh2ivtz1 ul li a')[0].getText();

    }
    get  childLinkDiv() {
        return $$(".ssrcss-6gq9s0-Wrap.e42f8510")[4];
    }
    get  ThreePage() {
        return $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[13];
    }
    moveToElement(element) {
        element.moveTo();
    }

    clickElement(element) {
        element.click();
    }

    get  menuButton() {
        return $("#primary-nav");

    }

    get  documentaries() {
        return $("#secondary-nav-docs").click();
    }

    get  listofheadingtextselector() {
        return $$(".BestOfGrid li .Promo-body")
    }
    get  threePageHeadings() {
        $$(".Promo-headline.Headline").forEach(element => {
            element.getText();
        });
    }

    get  prticularHeadings() {
        $$(".Promo-headline.Headline").forEach(element => {
            element.getText() == 'I Am Greta';
        });
    }
    get  prticularHeadings() {
        $$(".Promo-headline.Headline").forEach(element => {
            element.getText().includes('I Am Greta');
        });
    }
    get  prticularHeadingsbyIndex() {
        $$(".Promo-headline.Headline").forEach((element, index) => {
            if (index == 2) {
                element.getText();
                element.click();
            }
        });
        browser.back();
    }

    get  bbcthreePageListTextbyMap() {
        const textList = [];
        this.listofheadingtextselector.map((element) => {
            textList.push(element.getText());
        })
    }
}
module.exports = new threebbcPage();
