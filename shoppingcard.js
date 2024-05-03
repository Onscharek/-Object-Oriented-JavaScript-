class Product {
    constructor(productId, name, price) {
      this.productId = productId;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    addItem(shoppingCartItem) {
      this.items.push(shoppingCartItem);
    }
  
    removeItem(productId) {
      const index = this.items.findIndex(item => item.product.productId === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    displayCartItems() {
      if (this.items.length === 0) {
        console.log("Your shopping cart is empty.");
      } else {
        console.log("Your shopping cart:");
        this.items.forEach(item => {
          console.log(`${item.product.name} - Quantity: ${item.quantity} - Total Price: $${item.calculateTotalPrice()}`);
        });
      }
    }
  }
  
  // Testing the objects
  // Creating products
  const product1 = new Product(1, "Laptop", 1000);
  const product2 = new Product(2, "Phone", 500);
  const product3 = new Product(3, "Headphones", 100);
  
  // Creating a shopping cart
  const cart = new ShoppingCart();
  
  // Adding items to the cart
  cart.addItem(new ShoppingCartItem(product1, 2));
  cart.addItem(new ShoppingCartItem(product2, 1));
  cart.addItem(new ShoppingCartItem(product3, 3));
  
  // Displaying the cart
  cart.displayCartItems();
  
  // Removing an item from the cart
  cart.removeItem(2);
  
  // Displaying the updated cart
  cart.displayCartItems();
  