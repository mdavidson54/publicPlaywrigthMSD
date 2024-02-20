
exports.ProductsPage = class ProductsPage {

    constructor(page){
        this.page = page;
        this.addBikeLightToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cartLink = page.locator('[class="shopping_cart_link"]');
        this.sortSelect = page.locator('[data-test="product_sort_container"]');
        this.menuBurger = page.getByRole('button', { name: 'Open Menu' });
        this.aboutLink = page.getByRole('link', { name: 'About' });
    }

    async addAndGoToCart(){
        await this.addBikeLightToCart.click();
        await this.cartLink.click();
    }
}