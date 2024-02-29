import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('pawaryash97@gmail.com');
  await page.getByLabel('Email or mobile phone number').press('Tab');
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').fill('Yash@1997');
  await page.getByLabel('Sign inn').click();
  await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello, Yash');
});