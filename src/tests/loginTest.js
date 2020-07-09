import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import { validUser, invalidUser } from '../data/roles';

fixture `Login Test`;

test('should log into QualityShepherd.com', async t => {
  await t
    .useRole(validUser)
    .expect(homePage.siteTitle.exists).ok();
});