var pageObject = require(protractor.basePath+'/AmazonLocator_PageObjects')
const {$, $$, browser,ExpectedConditions: EC} = require('protractor');
var expect = require('chai').expect;
describe('testing scenario', function(){

	it('should navigate to amazon website', function() {
	    browser.ignoreSynchronization = true;
	    browser.get('https://www.amazon.com');
	    browser.wait(EC.visibilityOf(pageObject.todaysDeals,6000));
	    pageObject.todaysDeals.click();
	    browser.wait(EC.visibilityOf(pageObject.pageTitle,6000));
	    pageObject.pageTitle.getText().then(function(deal){
			expect(deal).to.eql("Today's Deals")
	    });
	});

	it('should select label low to high',function() {
	    pageObject.sortPrice.click();
	    browser.sleep(1000);
	    pageObject.sortPrice.getText().then(function (deal) {
			expect(deal.trim()).to.contains("Price - Low to High");
	    });
	});

	it('should compare whether image is present or not', function() {
	    browser.sleep(1000);
	    pageObject.ovarallImages().count().then(function(ct){
			for (var i = 0; i< ct.length; i++){
				expect(pageObject.imageLocator(i)).isPresent();
				expect(pageObject.dealTitle(i)).isDisplayed();
				expect(pageObject.dealPrice(i)).toMatch(/^\$s*\d+\.\d{2}\s*$/);
			}
	    });
	});
})
