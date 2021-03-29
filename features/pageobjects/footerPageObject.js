class footerObject {
    static findFooter(){
        $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]');
    }
    static VisibleFooter(){
        $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]').isDisplayed();
    }
    static footerOfAllPages(){
          $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]').click();
    }
}
module.exports = footerObject ;