import { Loginlocators } from "../locators/Loginlocators";
import { Page } from "@playwright/test";
export class LoginPage
{
    readonly username: any;
    readonly password: any;
    readonly loginbtn: any;
        //readonly page: Page;*/

    constructor(private page: Page)//here we have declared page so we do not needs to open the page everytime
    {
this.page=page;
this.username = page.locator("#user-name");
this.password = page.locator("#password");
this.loginbtn = page.locator("#login-button");

    }
    async goTO()
    {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }
}

