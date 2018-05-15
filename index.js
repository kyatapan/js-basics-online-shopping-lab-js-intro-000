var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let randomPrice = Math.floor(Math.random()*100);
var newItem = {'itemName': item, 'itemPrice': randomPrice };
cart.push(newItem);
return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  if (!getCart().length) {
    return `Your shopping cart is empty.`;
  }
  else {
    const itemsAndPrices = [];
    const cartSize = getCart().length;
     for (let i=0; i < cartSize-1; i++) {
    itemsAndPrices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  return `In your cart, you have ${itemsAndPrices.join(', ')}, and ${cart[cartSize-1].itemName} at $${cart[cartSize-1].itemPrice}.`;
}
}

function total() {
    let totalCost = 0;
    for (let i=0; i < getCart().length; i++) {
    totalCost += cart[i].itemPrice;
  }

  return totalCost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
