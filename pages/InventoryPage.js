import { Selector, t } from 'testcafe';

class InventoryPage {
    constructor(){
        this.productTitle = Selector('.product_label')
        this.burguerButton = Selector('.bm-burger-button')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('#shopping_cart_container')
        this.backpack = Selector('#item_4_title_link div')
        this.addBackpackButton = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
        this.tshit = Selector('#item_1_title_link div')
        this.addTshirtButton = Selector('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
        this.jacket = Selector('#item_5_title_link > div')
        this.addJacketButton = Selector('#inventory_container > div > div:nth-child(4) > div.pricebar > button')
    }

    async validateProductPage()
    {
        await t
        .hover(this.productTitle)
    }

    async clickMenuButton()
    {
        await t
        .click(this.burguerButton)
    }

    async clickLogoutButton() 
    {
         await t
         .click(this.logoutButton)
    }

    async clickShoppingCart()
    {
        await t
        .click(this.shoppingCart)
    }

    async logoutSaucedemo()
    {
        await this.clickMenuButton()
        await this.clickLogoutButton()
    }

    async validateBackpack()
    {
        await t
        .hover(this.backpack) 
    }

    async validateTshirt()
    {
        await t
        .hover(this.tshit) 
    }

    async validateJacket()
    {
        await t
        .hover(this.jacket) 
    }

    async addBackpack()
    {
        await t
        .hover(this.addBackpackButton) 
        .click(this.addBackpackButton)
    }

    async addTshirt()
    {
        await t
        .hover(this.addTshirtButton) 
        .click(this.addTshirtButton)
    }

    async addJacket()
    {
        await t
        .hover(this.addJacketButton) 
        .click(this.addJacketButton)
    }

    async validateBackpackAdded()
    {
        await this.validateBackpack()
        await this.addBackpack()
        await this.clickShoppingCart()
        await this.validateBackpack()
    }

    async validateMultipleItemsAdded()
    {
        await this.validateBackpack()
        await this.validateTshirt()
        await this.validateJacket()
        await this.addBackpack()
        await this.addTshirt()
        await this.addJacket()
        await this.clickShoppingCart()
        await this.validateBackpack()
        await this.validateTshirt()
        await this.validateJacket()
    }

}

export default new InventoryPage();