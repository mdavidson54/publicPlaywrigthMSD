//import { Page, Locator, expect} from '@playwright/test';


exports.CartPage = class CartPage {

    constructor(page){
        this.page = page;
        this.removeButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.thankYouTxt = page.locator('[data-test="finish"]');
    }

    async clickRemoveButton(){
        await this.removeButton.click();
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

}