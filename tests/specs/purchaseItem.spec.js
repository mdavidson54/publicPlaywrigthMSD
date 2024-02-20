const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/products-page');      
const { CartPage } = require('../pages/cart-page');
const { LoginPage } = require('../pages/login-page');
const { InfoPage } = require('../pages/information-page');
const { randomString } = require('../utils/randomUtil');

const user = process.env.UN;
const pass = process.env.PWD;
const fname = randomString(5);
const lname = randomString(8);

let loginPage = LoginPage;
let productPage = ProductsPage;
let cartPage = CartPage;
let infoPage = InfoPage;

test.describe.configure({mode: 'parallel'});

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    infoPage = new InfoPage(page);
    await page.goto('/');
});

test.describe('Purchase Item to Thank You', () => {
    test('Purchase Item to Thank You', async () => {
        await loginPage.login(user,pass);
        await productPage.addAndGoToCart();
        await cartPage.checkoutButton.click();
        await infoPage.fillInInfo(fname,lname, '48150');
        await cartPage.finishButton.click();
        await expect(cartPage.thankYouTxt).toBeVisible;
    });
});

test.afterEach(async ({page}) =>{
    await page.close;
});