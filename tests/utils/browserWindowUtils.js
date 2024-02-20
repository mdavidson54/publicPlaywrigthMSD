import { Page } from "@playwright/test";



export function popupNewTab(page){
    page.on('popup', async popup => {
        // Start waiting for popup before clicking. Note no await.
        const popupPromise = page.waitForEvent('popup');
        await page.getByText('open the popup').click();
        popup = await popupPromise;
        // Wait for the popup to load.
        await popup.waitForLoadState("load");
        console.log(await popup.title());    
    })
};

// To handle unexpected popups
export function unexpectedPopup(page){
    page.on('popup', async popup => {
        await popup.waitForLoadState();
        console.log(await popup.title());
    });
};

/* Working Example
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/?ref=hackernoon.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Sign in' }).click();
  const page1 = await page1Promise;
  page1.waitForURL('https://accounts.saucelabs.com/am/XUI/#login/');
  page1.waitForLoadState("load");
  await page1.getByLabel('User Name').fill('fgfgf');
  await page1.getByLabel('Password').fill('rewew');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await expect(page1.getByText('User name/password')).toBeVisible();
});
*/