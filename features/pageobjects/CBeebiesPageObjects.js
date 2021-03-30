class CBeebiesPageObject {
    // static LoadCBeebiesPage() {
    //     cy.visit(Cypress.env('url'));
    //     cy.url().should('include', 'bbc'
    //     );

    // }
    static CBeebiesPageOpen() {
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[7].getText();
        $$(".ssrcss-1dmfhyk-MenuLinkList-En.e1mk2b5i0 li a")[7].click();
        // .find('li a').then(function (listitems) {
        //     cy.log(listitems.text());
        // }).contains('CBeebies').click({ force: true });
    }

    static buttonsOnCbeebiesPage() {
        $$("div.promo__contents")
            // .should('have.length', 15)
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
        //         //print the count of anchor tags and join teh array
        //         console.log(`Anchor Tag Count - ${arr.length}`);
        //         console.log(`Anchor Tags Text String - ${arr.join(",")}`);
        //         //         O/p—Anchor Tag Count - 0
        //         //  Anchor Tags Text String - 
        //         // Because         let arr =[];    console.log(`Anchor Tag Count - ${arr.length}`); console.log(`Anchor Tags Text String - ${arr.join(",")}`); these all are synchronous functions. Sprint these first so we got o/p is 
        //         //     Anchor Tag Count - 0 means it’s empty array.
        //         //  Anchor Tags Text String - 
        //         // Then execute this asynchronous function.
        //         //         cy.get("a").each((el) => {
        //         //             arr.push(el.text());
        //         //         })
        //         //this si resolved. we rae queuing up the things all right so the 
        //         //logic that you have to work on . so use .then again pass calback function 
        //         //but that gives you the opportunity to run your code once the previous command has been 
        //         //executed all , we can it below it block.
    }





    static forBreakLoop() {
        let array = [...Array(10).keys()]
        for (let index = 0; index < array.length; index++) {
            //    console.log(array[index]);
            //above console o/p is
            //    0
            //    1
            //    2
            //    3
            //    4
            //    5
            if (array[index] === 5) {
                break;
                //    return false would also do same
            }
            console.log(array[index]);
            //this console o/p is 
            //    0
            //    1
            //    2
            //    3
            //    4

        }
    }
    static itemHeading() {
        var cssprop = $(".content-item-description__heading").getCSSProperty("margin-bottom");
        console.log("css property returned:" + JSON.stringify(cssprop));
        //    .should('have.css', 'margin-bottom', '8px');
    }
    static buttonslink() {
        var cssprop = $(".brandcard").getCSSProperty("background-color");
        console.log("css property returned:" + JSON.stringify(cssprop));
        //.should('have.css', 'background-color', 'rgb(157, 85, 234)');
        //         cy.get(".brandcard").trigger('mouseover').click();
     
    }
    static specificButton() {
        // $$("span.button__inner")[0]
        //.should('contains.text', 'Add to My Shows').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.3) 0px 4px 3px -2px')
        var cssprop = $$("span.button__inner")[0].getCSSProperty("box-shadow");
        console.log("css property returned:" + JSON.stringify(cssprop));
        var cssprop = $$("span.button__inner")[0].getCSSProperty("background-color");
        console.log("css property returned:" + JSON.stringify(cssprop));
        //             .and('have.css', 'background-color', 'rgb(49, 121, 181)');
     
        // var cssprop =   $$("span.button__inner")[0].moveTo().getCSSProperty("background-color");
        // console.log("css property returned:" + JSON.stringify(cssprop));
        //         cy.get("span.button__inner").eq(0).should('contains.text', 'Add to My Shows').trigger('mouseover').should('have.css', 'background-color', 'rgb(49, 121, 181)');
        //         cy.get("span.button__inner").eq(1).should('contain.text', 'Choose an episode').should('have.css', 'background-color', 'rgb(226, 0, 122)');
        //         cy.get("span.button__inner").eq(1).should('contain.text', 'Choose an episode').trigger('mouseover').should('have.css', 'background-color', 'rgb(226, 0, 122)');
    }
}
// export default CBeebiesPageObject;
module.exports = CBeebiesPageObject;