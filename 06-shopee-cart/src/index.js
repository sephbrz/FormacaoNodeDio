import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

console.log("\nBem vindo ao seu carrinho shopee\n")

const myCart = [];
const myWishlist = [];

const item1 = await createItem ("sapato", "1", 19.99, 1);
const item2 = await createItem ("calca", "2", 29.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.increaseItem(myCart,item1.code)
await cartService.decreaseItem(myCart,item2.code);
//await cartService.deleteItem(myCart,item1.code);

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart);