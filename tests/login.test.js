import { test, expect } from "@playwright/test";
import path from "path";

test("Login Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
   
  await page.locator("id=user-name").fill("standard_user");
 
  await page.locator('xpath=//input[@id="password"]').fill("secret_sauce");
  
  await page.locator('id=login-button').click();
  // await page.locator('xpath=//button[text()="Open Menu"]').click();
 //  await expect(page.locator('xpath=//a[text()="All Items"]')).toContainText('All Itemms')
 await page.pause();

 
 
  
  
});
