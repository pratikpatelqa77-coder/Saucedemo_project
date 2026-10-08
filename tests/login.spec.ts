import {test,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage';
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';

test("login to sauce demo application ",async({page})=>
{
    const loginpage = new LoginPage(page);
   


    await page.goto(BASE_URL);
    await loginpage.login(USERNAME,PASSWORD);
    //await page.locator("#customer_email").fill("pratik.patel.qa77@gmail.com");
    //await page.locator("#customer_password").fill("Krisha@611");
    //await page.locator(".button").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.pause();
});
