class CBeebiesPageObject {
    static CBeebiesPageOpen() {
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[7].getText();
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[7].click();
    }

    static buttonsOnCbeebiesPage() {
        $$("div.promo__contents")
            .forEach((element, index) => {
                if (index == 0) {
                    element.click();
                }
            })
    }

    static syncasyncactions() {
        let arr = [];
        $$("a").forEach((el) => {
            arr.push(el.getText());
        })
    }

    static forBreakLoop() {
        let array = [...Array(10).keys()]
        for (let index = 0; index < array.length; index++) {
            if (array[index] === 5) {
                break;
            }
            console.log(array[index]);
        }
    }
    static itemHeading() {
        var cssprop = $(".content-item-description__heading").getCSSProperty("margin-bottom");
        console.log("css property returned:" + JSON.stringify(cssprop));
    }
    static buttonslink() {
        var cssprop = $(".brandcard").getCSSProperty("background-color");
        console.log("css property returned:" + JSON.stringify(cssprop));  
    }
    static specificButton() {
        var cssprop = $$("span.button__inner")[0].getCSSProperty("box-shadow");
        console.log("css property returned:" + JSON.stringify(cssprop));
        var cssprop = $$("span.button__inner")[0].getCSSProperty("background-color");
        console.log("css property returned:" + JSON.stringify(cssprop));
    }
}
module.exports = CBeebiesPageObject;