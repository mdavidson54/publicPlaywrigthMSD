const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/products-page');      
const { LoginPage } = require('../pages/login-page'); 
const { AboutPage } = require('../pages/about-page');   

const user = process.env.UN;
const pass = process.env.PWD;

let loginPage = LoginPage;
let productPage = ProductsPage;
let aboutPage = AboutPage;

test.describe.configure({mode: 'parallel'});

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    aboutPage = new AboutPage(page);
    await page.goto('/');
});

test.describe('Second Browser Tab Bad login', () => {
    test('Bad login error message', async ({page}) => {
        // Login go to about page
        await loginPage.login(user,pass);
        await productPage.menuBurger.click();
        await productPage.aboutLink.click();
        // Click sign in and use bad creds in second browser tab
        // Start the wait before the click
        const page1Promise = page.waitForEvent('popup');
        await aboutPage.signInButton.click();
        const page1 = await page1Promise;
        //Important not to use await on these next two, SlowMo max 200 delay
        page1.waitForURL('https://accounts.saucelabs.com/am/XUI/#login/');
        page1.waitForLoadState("load");
        await page1.getByLabel('User Name').fill('fgfgf');
        await page1.getByLabel('Password').fill('rewew');
        await page1.getByRole('button', { name: 'Log in' }).click();
        await expect(page1.getByText('User name/password')).toBeVisible();
    });
});

test.afterEach(async ({page}) =>{
    await page.close;
});