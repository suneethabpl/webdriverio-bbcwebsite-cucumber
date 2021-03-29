class headerObject {
    static getHeader(){
        $("//header[@id='header-content']");
       }
    static displayedHeader(){
        $("//header[@id='header-content']").isDisplayed();
       }
    static headerInAllPages(){
     $("//header[@id='header-content']").isExisting();
    }
}
module.exports = headerObject;