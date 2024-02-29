
const{test,expect}=require('@playwright/test')

test( 'My First Test', async ({page}) => {
    await page.goto('https://www.google.co.in')
  await  expect(page).toHaveTitle('Google')
  
   await page.locator('textarea[name="q"]').fill('Live News')
   await page.press('Enter')
   await page.close()
   
})