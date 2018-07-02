import shoppingCart from './shoppingcart'


class shop extends shoppingCart {
    constructor (quantity) {
        super();
        this.quantity = 100;
    }
    removeItem() {
        this.quantity -= 1
    }
}

export {shop as default} 
