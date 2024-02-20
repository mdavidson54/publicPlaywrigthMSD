const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/products-page');      
const { LoginPage } = require('../pages/login-page');
const { datePlusMinusDays } = require('../utils/dateUtil');

const user = process.env.UN;
const pass = process.env.PWD;

let loginPage = LoginPage;
let productPage = ProductsPage;

test.describe.configure({mode: 'parallel'});

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    await page.goto('/');
});

test.describe('Login to Browser Stack Test site', () => {
    test('Successfull login', async () => {
        await loginPage.login(user,pass);
        await expect(productPage.cartLink).toBeEnabled;
        console.log('Test Ran on: ' + datePlusMinusDays(0))
    });
});

/*test.afterAll(async ({page}) =>{
    await page.close;
}); */

test.afterEach(async ({page}) =>{
    await page.close;
});