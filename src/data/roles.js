import { Role } from "testcafe";
import loginPage from "../pages/loginPage";

const loginPageUrl = `${loginPage.baseUrl}${loginPage.url}`;

export const validUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("test", 'test');
  },
  { preserveUrl: true }
);