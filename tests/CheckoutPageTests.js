import { Selector } from 'testcafe';
import IndexPage from '../pages/IndexPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

const userData = require('../data/users.json');
const customerData =  require('../data/customer.json');

fixture `Checkout Tests`
    .page `https://www.saucedemo.com/`;

 //Expected: Validate error message is displayed on the user’s information page.
 userData.validUsers.forEach(scenario => {    
    test('Continue with missing mail information '+ scenario.data.username, async t => 
    {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await CartPage.goToCartPage()
        await CheckoutPage.goToCheckoutPage()
        await CheckoutPage.validateFirstNameRequired()
        await CheckoutPage.validateLastNameRequired()
        await CheckoutPage.validatePostalCodeRequired()
        await t
        .wait(1000)
    });
});
 
 //Expected: Validate the user navigates to the overview page once the data has been filled.
 userData.validUsers.forEach(scenario => {    
    test('Fill user’s information '+ scenario.data.username, async t => {
        await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
        await InventoryPage.validateProductPage()
        await CartPage.goToCartPage()
        await CheckoutPage.goToCheckoutPage()
        await CheckoutPage.fillShoppingForm(customerData.customer.data.firstName,
            customerData.customer.data.lastName,customerData.customer.data.postalCode)
        await CheckoutPage.validateOverviewPage()
        await t .wait(1000)
    });
});
 
 //Expected: Validate items in the overview page match with the added items.
 userData.validUsers.forEach(scenario => {    
 test('Final order items '+ scenario.data.username, async t => {
    await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
    await InventoryPage.validateProductPage()
    await InventoryPage.validateMultipleItemsAdded()
    await CheckoutPage.goToCheckoutPage()
    await CheckoutPage.fillShoppingForm(customerData.customer.data.firstName,
        customerData.customer.data.lastName,customerData.customer.data.postalCode)
    await CheckoutPage.validateOverviewPage()
    await CheckoutPage.validateItemsOverviewPage()
    await t .wait(1000)
 });
});
 
 //Expected: Validate the user navigates to the confirmation page.
 userData.validUsers.forEach(scenario => {  
 test('Complete a purchase '+ scenario.data.username, async t => {
    await IndexPage.loginSaucedemo(scenario.data.username,scenario.data.password)
    await InventoryPage.validateProductPage()
    await InventoryPage.validateMultipleItemsAdded()
    await CheckoutPage.goToCheckoutPage()
    await CheckoutPage.fillShoppingForm(customerData.customer.data.firstName,
        customerData.customer.data.lastName,customerData.customer.data.postalCode)
    await CheckoutPage.validateOverviewPage()
    await CheckoutPage.validateItemsOverviewPage()
    await CheckoutPage.validateCompletePurchase()
    await t .wait(1000)
 });
});