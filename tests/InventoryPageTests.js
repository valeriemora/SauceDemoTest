import { Selector } from 'testcafe';
import IndexPage from '../pages/IndexPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

const userData = require('../data/users.json');

fixture `Inventory Tests`
    .page `https://www.saucedemo.com/`;

// Expected: Validate the user navigates to the shopping cart page.
userData.validUsers.forEach(scenario => {    
    test('Navigate to the shopping cart '+ scenario.data.username, async t => 
    {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await CartPage.goToCartPage();
        await t
        .wait(1000)
    });
});