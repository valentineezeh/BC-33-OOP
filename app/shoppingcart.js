'use strict'

class shoppingCart {
    constructor(total, items) {
        this.total = 0;
        this.items = {};
    }
    addItem(itemName, quantity, price) {
        if (typeof itemName !== 'string') {
            throw new Error ('itemName must be a string.')
        }

        if (typeof quantity !== 'number' || typeof price !== 'number') {
            throw new Error ('price and quantity must be numbers.')
        }

        if (!(itemName in this.items)) {
            for (let itemName of Object.keys(this.items)) {
                let val = this.items[itemName];
                val = quantity;     
            }
        } else {
                val += quantity;
        }
        this.total += (price * quantity)
    }
    removeItem (itemName, quantity, price) {

        for (let itemName of Object.keys(this.items)) {
            let val = this.items[itemName];

            if (quantity > val ) {
                quantity = val
                val -= quantity;   
            } else{
                val -= quantity
            }
            if (this.items[itemName] === 0) {
                delete this.items.itemName;
            }
        }
        
        this.total -= (price * quantity)
    }
    checkout(cashPaid) {
        if (this.total > cashPaid) {
            return 'Cash paid not enough'
        }
        else {
            let balance = cashPaid - this.total
            return balance
        }
    }
} 

export {shoppingCart as default} 


