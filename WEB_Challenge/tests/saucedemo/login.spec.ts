import {test,expect } from '@playwright/test'


test.describe('soucedemo validation', async()=>{

   test.only('login test', async({page})=>{
      await page.goto('https://www.saucedemo.com/')
      // login as standard user
      await page.locator('[id="user-name"]').fill('standard_user')
      await page.locator('[id="password"]').fill('secret_sauce')
      await page.locator('[id="login-button"]').click()

      //Selecting item from product and adding item to card by clicking button
      await expect(page.locator('[id="item_4_title_link"]')).toHaveText('Sauce Labs Backpack')
      await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()

      //Selecting second item from product and adding second item to card by clicking button
      await expect(page.locator('[id="item_0_title_link"]')).toHaveText('Sauce Labs Bike Light')
      await page.locator('[id="add-to-cart-sauce-labs-bike-light"]').click()

      //Go to cart
      await page.locator('[class="shopping_cart_link"]').click()
      
      // //Selecting item from cart and removing it
      await expect(page.locator('[id="item_4_title_link"]')).toHaveText('Sauce Labs Backpack')
      await page.locator('[id="remove-sauce-labs-backpack"]').click()

      //Validating checkout overview
      await page.locator('[id="checkout"]').click()
      await page.locator('[id="first-name"]').fill('Odile')
      await page.locator('[id="last-name"]').fill('Nzambazamariya')
      await page.locator('[id="postal-code"]').fill('250')
      await page.locator('[id="continue"]').click()
      
      //Cart items on the list
      expect(page.locator('[id="shopping_cart_container"]')).toBeTruthy()
      
      //Check the total whether is right
      expect(page.locator('[id="inventory_item_price"]')).toBeTruthy()

      //Finish the purchase
      await page.locator('[id="finish"]').click()

      //Validating that the website confirms the order
      await expect(page.locator('[class="complete-header"]')).toHaveText('Thank you for your order!')

   })

   test.only("sorting product",async({page})=>{
      await page.goto('https://www.saucedemo.com/')
      // login as standard user
      await page.locator('[id="user-name"]').fill('standard_user')
      await page.locator('[id="password"]').fill('secret_sauce')
      await page.locator('[id="login-button"]').click()
      
      //sort product by name
      await page.locator('[class="product_sort_container"]').selectOption({label:'Name (A to Z)'})


   })
})
