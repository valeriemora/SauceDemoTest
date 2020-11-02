import { Selector } from 'testcafe';
import IndexPage from '../pages/IndexPage';
import InventoryPage from '../pages/InventoryPage';

const userData = require('../data/users.json');

fixture `Cart Tests`
    .page `https://www.saucedemo.com/`;

//Expected: Validate the item has been added to the shopping cart.
userData.validUsers.forEach(scenario => {    
    test('Add a single item to the shopping cart '+ scenario.data.username, async t => 
    {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await InventoryPage.validateBackpackAdded()
        await t
        .wait(1000)
    });
});

//Expected: Validate all the items that have been added to the shopping cart.
userData.validUsers.forEach(scenario => { 
    test('Add multiple items to the shopping cart '+ scenario.data.username, async t => {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await InventoryPage.validateMultipleItemsAdded()
        await t
        .wait(1000)
    });
});