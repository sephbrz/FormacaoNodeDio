//use cases

// criar item com subtotal calculado
async function createItem (name, code, price, quantity){
    return {
        name,
        code,
        price,
        quantity, 
        subtotal: () => price * quantity,
    }
};

export default createItem;