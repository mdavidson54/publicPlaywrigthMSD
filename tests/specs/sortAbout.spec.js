const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/products-page');      
const { LoginPage } = require('../pages/login-page'); 
const { AboutPage } = require('../pages/about-page'); 

const user = process.env.UN;
const pass = process.env.PWD;

let loginPage =  LoginPage;
let productPage = ProductsPage;
let aboutPage = AboutPage;

test.describe.configure({mode: 'parallel'});

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    aboutPage = new AboutPage(page);
    await page.goto('/');
});

test.describe('Product Sort and About Page', () => {
    test('Product Sort and About Page Both', async () => {
        await loginPage.login(user,pass);
        // soft assert on login as it's covered in login test
        await expect.soft(productPage.cartLink).toBeEnabled;
        await productPage.sortSelect.selectOption('Price (high to low)');
        await productPage.sortSelect.selectOption('Price (low to high)');
        await productPage.sortSelect.selectOption('Name (A to Z)');
        await productPage.sortSelect.selectOption('Name (Z to A)');
        await productPage.sortSelect.selectOption('Price (low to high)');
        await productPage.menuBurger.click();
        await productPage.aboutLink.click();
        await expect(aboutPage.tryItButton).toBeVisible();
    });
});

test.afterEach(async ({page}) =>{
    await page.close;
});