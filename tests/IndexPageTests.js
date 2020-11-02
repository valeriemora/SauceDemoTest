import { Selector } from 'testcafe';
import IndexPage from '../pages/IndexPage';
import InventoryPage from '../pages/InventoryPage';

const userData = require('../data/users.json');

fixture `Index Tests`
    .page `https://www.saucedemo.com/`;

// Expected : Validate the user navigates to the product’s page.
userData.validUsers.forEach(scenario => {    
    test('Login with a valid user '+ scenario.data.username, async t => 
    {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await t
        .wait(1000)
    });
});

//Expected : Validate error message is displayed.
userData.invalidUsers.forEach(scenario => {    
    test('Login with an invalid user '+ scenario.data.username, async t => 
    {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await IndexPage.validateErrorMessage(scenario.data.errorMessage)
        await t
        .wait(1000)
    });
});

// Expected: Validate the user navigates to the login page.
userData.validUsers.forEach(scenario => {    
    test('Logout from product’s page '+ scenario.data.username, async t => 
    {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await InventoryPage.logoutSaucedemo()
        await IndexPage.validateLoginPage()
        await t
        .wait(1000)
    });
});
