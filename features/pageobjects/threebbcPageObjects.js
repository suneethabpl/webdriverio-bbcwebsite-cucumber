

class threebbcPage {
    get  title() {
        const title = browser.getTitle();
    
    }
    parent() {
        // return $('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');//find element
        // return $$('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');//find elements--this return array
        //so we have to capture that array. in this scenario, i have only single element. so, just add 0th element like this.
        // return $$('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70')[0];//here 0 is first index.//now o/p is it run the test and picked up first element and works fine.
        //if i changed [1] instead of [0] then test is failed because we are tring to get  2 elements 
        // //but there is only one element. 
        // return $('a.istats-notrack');
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
        // assert.equal('Welcome to the BBC', text);
        // expect(text).equals('Welcome to the BBC');

    }
    get  MoreLink() {
        return $('.ssrcss-sa2skc-MenuLabel.eki2hvo14')
        // expect($('.ssrcss-sa2skc-MenuLabel.eki2hvo14')).toBeDisplayed();

    }
    get  hiddenlist() {
        return $$('div.ssrcss-1mklhpx-MenuWrapper.eh2ivtz1 ul li a')[0].getText();

    }
    get  childLinkDiv() {
        return $$(".ssrcss-6gq9s0-Wrap.e42f8510")[4];
    }
    get  ThreePage() {
        return $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[13];
        //    $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a").should.be.equal('b');
    }
    moveToElement(element) {
        // element.waitForDisplayed();
        element.moveTo();
    }

    clickElement(element) {
        // element.waitForDisplayed();
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
// module.exports = new mercuryToursLoginPage();
module.exports = new threebbcPage();
// export default threebbcPage;