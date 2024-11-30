import createItem from "./services/item.js"
import { addItem, cauculateTotal, deleteItem, displayCart, deleteItemByIndex, removeItem } from "./services/cart.js"
const cart = []
const myWhishList = []

console.log("bem vindo ao carrinho")
const item1 = await createItem("beyblade draco", 150.00, 2)
const item2 = await createItem("beyblade pegasus", 210.00, 3)
await addItem(cart, item1)
await addItem(cart, item2)
//await deleteItem(cart, item2.name)


//await deleteItemByIndex(cart, 2)
removeItem(cart, item2)
await cauculateTotal(cart)
await displayCart(cart)

