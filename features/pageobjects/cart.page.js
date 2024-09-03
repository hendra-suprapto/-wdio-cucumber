import Page from './page.js';

class CartPage extends Page {
    
    get checkoutButton() {}
    get continueShoppingButton(){}
    
     open(){
        return super.open("cart.html")
     }
}

export default new CartPage();