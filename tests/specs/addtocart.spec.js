const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/products-page');      
const { CartPage } = require('../pages/cart-page');
const { LoginPage } = require('../pages/login-page');

const user = process.env.UN;
const pass = process.env.PWD;

let loginPage = LoginPage;
let productPage = ProductsPage;
let cartPage = CartPage; 

test.describe.configure({mode: 'parallel'});
test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await page.goto('/');
});

test.describe('Add to Cart and Remove', () => {
    test('Add to Cart and Remove both', async ({ page }) => {
        await loginPage.login(user,pass);
        await productPage.addAndGoToCart();
        await cartPage.clickRemoveButton();
        await expect(cartPage.checkoutButton).toBeEnabled;
    });
});

test.afterEach(async ({page}) =>{
    await page.close;
});