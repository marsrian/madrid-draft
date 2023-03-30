// Use local storage to manage data:

const addToDb = (id) => {
    let shoppingCart = getShoppingCart();


    // Set the shopping cart in Local storage:
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log('This will work when the product is already exist');
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        // console.log('This will work when the product is not added yet');
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}





const removeFromDb = (id) => {
    let shoppingCart = getShoppingCart();

    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}




const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    return shoppingCart;
}


const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}





export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
};