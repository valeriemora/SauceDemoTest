import { Selector, t } from 'testcafe';
import CartPage from './CartPage';
import InventoryPage from './InventoryPage';

const customerData =  require('../data/customer.json');

class CheckoutPage {

    constructor(){
        this.firstNameInput = Selector('#first-name')
        this.lastNameInput = Selector('#last-name')
        this.postalCodeInput = Selector('#postal-code')
        this.continueButton = Selector('input[value="CONTINUE"]')
        this.errorField = Selector('#checkout_info_container div form h3')
        this.finishButton = Selector('a').withText('FINISH')
        this.thanksTitle = Selector('h2').withText('THANK YOU FOR YOUR ORDER')
    }

    async validateCheckoutPage()
    {
        await t
        .hover(this.firstNameInput)
    }

    async enterFirstName(firstName)
    {
        await t 
        .typeText(this.firstNameInput, firstName)
    }

    async enterLastName(lastName)
    {
        await t 
        .typeText(this.lastNameInput, lastName)
    }

    async enterPostalCode(postalCode)
    {
        await t 
        .typeText(this.postalCodeInput, postalCode)
    }

    async clickContinueButton()
    {
        await t
        .click(this.continueButton)
    }

    async validateErrorField(error)
    {
         await t
         .expect(this.errorField.innerText).eql(error)
    }

    async clickFinishButton()
    {
        await t
        .click(this.finishButton)
    }

    async validateCompletePurchase()
    {
        this.clickFinishButton()
        await t
        .hover(this.thanksTitle)
    }

    async validateOverviewPage()
    {
        await t
        .hover(this.finishButton)
    }

    async cleanForm()
    {
        await t
        .selectText(this.firstNameInput).pressKey("delete")
        .selectText(this.lastNameInput).pressKey("delete")
        .selectText(this.postalCodeInput).pressKey("delete")
    }

    async fillShoppingForm(first,last,code)
    {
        if(first != "")
            await this.enterFirstName(first)
        if(last != "")
            await this.enterLastName(last)
        if(code != "")
            await this.enterPostalCode(code)
        await this.clickContinueButton()
    }

    async validateFirstNameRequired()
    {   
        await this.enterLastName(customerData.customer.data.lastName)
        await this.enterPostalCode(customerData.customer.data.postalCode)
        await this.clickContinueButton()
        await this.validateErrorField("Error: First Name is required")
        await this.cleanForm()
    }

    async validateLastNameRequired()
    {   
        await this.enterFirstName(customerData.customer.data.firstName)
        await this.enterPostalCode(customerData.customer.data.postalCode)
        await this.clickContinueButton()
        await this.validateErrorField("Error: Last Name is required")
        await this.cleanForm()
    }

    async validatePostalCodeRequired()
    {   
        await this.enterFirstName(customerData.customer.data.firstName)
        await this.enterLastName(customerData.customer.data.lastName)
        await this.clickContinueButton()
        await this.validateErrorField("Error: Postal Code is required")
        await this.cleanForm()
    }

    async goToCheckoutPage()
    { 
        await CartPage.clickCheckoutButton()
        await this.validateCheckoutPage()
    }

    async validateItemsOverviewPage()
    {
        await InventoryPage.validateBackpack()
        await InventoryPage.validateTshirt()
        await InventoryPage.validateJacket()
    }
x

}

export default new CheckoutPage();