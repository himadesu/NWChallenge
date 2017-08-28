class amazonLocators{
get todaysDeals() {
    return $('#nav-xshop a:nth-child(3)');
}
get sortPrice() {
    return $('option[value="BY_PRICE_ASCENDING"]');
}
ovarallImages() {
    return $$('.a-fixed-left-grid-col.rightCol img');
}

imageLocator(row) {
    return $('.a-fixed-left-grid-col.rightCol div[id="100_dealView_'+row+'"] img');
}
get nextButton() {
    return $('.a-last>a');
}
dealTitle(row) {
    return $('.a-fixed-left-grid-col.rightCol  div[id="100_dealView_'+row+'"] #dealTitle');
}
get paginationLength() {
    return $('div[class="a-text-center"] li:nth-child(6)');
}
dealPrice(row) {
    return $('.a-fixed-left-grid-col.rightCol.priceBlock div[id="100_dealView_'+row+'"]');
}
get pageTitle() {
    return $('.gbh1-bold')
}
}
module.exports = new amazonLocators();