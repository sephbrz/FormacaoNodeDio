//use cases

// mostra os items dentro do carrinho
async function displayCart(userCart){
    console.log("Lista de itens do carrinho:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}X  Subtotal: ${item.subtotal()}`)
    });
};

// adiciona um novo item
async function addItem(userCart, item){
    userCart.push(item);
};

// aumenta a quantidade de um item
async function increaseItem(userCart, itemCode){
    const index = userCart.findIndex((p) => p.code === itemCode);
    if (index !== -1) {
        userCart[index].quantity += 1;
    }
};

// diminui a quantidade de um item
async function decreaseItem(userCart, itemCode){
    const index = userCart.findIndex((p) => p.code === itemCode);
    if (index !== -1) {
        if (userCart[index].quantity == 1) {
            userCart.splice(index, 1);
        } else {
            userCart[index].quantity -= 1;
        }
    }
};

// remove um item do carrinho
async function deleteItem(userCart, itemCode){
    const index = userCart.findIndex((item) => item.code === itemCode);
    if (index !== -1) {
        userCart.splice(index, 1)
    }

};

// calcula o valor total do carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log("O valor total do seu carrinho é de:");
    console.log(`R$${result}\n`)
};

export {
    displayCart,
    addItem,
    increaseItem,
    decreaseItem,
    deleteItem,
    calculateTotal
}