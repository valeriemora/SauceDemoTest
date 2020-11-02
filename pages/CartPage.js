import { Selector, t } from 'testcafe'
import InventoryPage from '../pages/InventoryPage';

class CartPage {

    constructor(){
        this.cartTitle = Selector('#contents_wrapper').withText('Your Cart')
        this.continueShopButton = Selector('a').withText('Continue Shopping')
        this.checkoutButton = Selector('a').withText('CHECKOUT')
    }

    async validateCartPage()
    {
        await t
        .click(this.cartTitle)
    }

    async clickCheckoutButton ()
    {   await t
        .click(this.checkoutButton)
    }


    async goToCartPage()
    {
        await InventoryPage.clickShoppingCart()
        await this.validateCartPage()
    }

}

export default new CartPage();
