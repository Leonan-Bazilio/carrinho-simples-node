const userCarta = []

async function addItem(userCart, item) {
  userCart.push(item)
}

async function deleteItem(userCart, itemName) {
  //userCart.filter((itemCart) => itemCart.name != itemName)
  const index = userCart.findIndex((itemCart) => itemCart.name === itemName)
  if (index != -1) { userCart.splice(index, 1) }
}

async function deleteItemByIndex(userCart, index) {
  const deleteIndex = index - 1

  if (index >= 0 && index <= userCart.length) {
    userCart.splice(deleteIndex, 1)
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((itemCart) => itemCart.name === item.name)
  if (indexFound == -1) {

    return
  }
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1
    return
  }
  if (userCart[indexFound].quantity = 1) {
    console.log("ddd", userCart, item)
    userCart.splice(indexFound, 1)
  }

}
async function cauculateTotal(userCart) {

  console.log(`o valor total do carrinho é:\n ${userCart.reduce((total, item) => total + item.subtotal, 0)}`)
}
async function displayCart(userCart) {
  console.log("Lista de itens no carrinho")
  userCart.forEach((item, index) => { console.log(`${index + 1}: ${item.name}`) })
}
export {
  addItem,
  deleteItem,
  deleteItemByIndex,
  cauculateTotal,
  displayCart,
  removeItem
}