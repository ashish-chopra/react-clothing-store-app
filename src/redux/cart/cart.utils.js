export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
}

export const increaseQuantityInCart = (cartItems, id) => {
    const exists = cartItems.find(item => item.id === id);
    if (!exists) return cartItems;

    return cartItems.map(item => (item.id == id ? { ...item, quantity: item.quantity + 1 } : item));
}

export const decreaseQuantityInCart = (cartItems, id) => {
    const exists = cartItems.find(item => item.id === id);
    if (!exists) return cartItems;

    if (exists.quantity == 1) {
        return cartItems.filter(item => item.id !== id);
    }
    return cartItems.map(item => (item.id == id ? { ...item, quantity: item.quantity - 1 } : item));
}