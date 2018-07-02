import chai from 'chai';
import shoppingCart from '../app/shoppingcart'
import shop from '../app/shop.js'

let expect = chai.expect;
chai.should();

describe('shoppingCart', () => {
  describe('#everything', () => {;
    let nextCart;

    beforeEach(() => {
      nextCart = new shoppingCart ();
    });

    it('should return the correct total', () => {
      nextCart.addItem('mango', 2, 30)
      nextCart.addItem('Oranges', 2, 100)
      nextCart.total.should.equal(260);
    });

    it("should return the correct total", () => {
      nextCart.addItem('Pear', 50, 300)
      nextCart.removeItem('Pear', 50, 200)
      nextCart.removeItem('Pear', 50, 30) 
      nextCart.total.should.equal(3500);
    });

    it ('should return zero if the quantity of items added and removed are the same', () => {
       nextCart.addItem ('strawberry', 5, 1500);
       nextCart.removeItem('strawberry', 5, 1500)
       nextCart.total.should.equal(0);
    });

    it('should return the correct balance', () => {
      nextCart.addItem('Paw Paw', 5, 500)
      nextCart.addItem('Chocolate', 10, 100)
      nextCart.checkout(5500).should.equal(2000);
    });

    it('should return error if cash paid is less than total', () => {1
       nextCart.addItem('fig', 30, 400);
       expect (nextCart.checkout(11000)).to.deep.equal('Cash paid not enough')
    });

    it('should return an error if price and/or quantity is/are not number inputs', () => {
      () => {
        nextCart.addItem('Orange', 'One', 'four hundred').should.throw('price and quantity must be numbers.');
    }
    });
  });

  describe('#inheritance', () => {;
    let nikeCart;

    beforeEach(() => {
      nikeCart = new shop ();
    });

    it('should return the correct total with sub-class shop', () => {
      nikeCart.addItem('shorts', 10, 300)
      nikeCart.addItem('shoes', 5, 500)
      nikeCart.total.should.equal(5500);
    });

    it('should return the correct balance', () => {
      nikeCart.addItem('swim-wear', 50, 500)
      nikeCart.addItem('ball', 100, 50)
      nikeCart.checkout(50000).should.equal(20000);
    });

    it('should over-ride the removeItem() method of shoppingCart', () => {
    nikeCart.removeItem();
    nikeCart.quantity.should.equal(99);
    });
  });
});

