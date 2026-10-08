
const ENV_URL =
{
    dev : "https://www.saucedemo.com/",
    stage: "https://www.saucedemo.com/",
    prod: "https://www.saucedemo.com/",
}
export const ENV =  "prod";
export const BASE_URL = (ENV_URL as any)[ENV]
export const USERNAME = "standard_user";
export const PASSWORD = "secret_sauce";



