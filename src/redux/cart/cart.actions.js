import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const increaseQuantity = (id) => {
    console.log('action called', id);
    return {
        type: CartActionTypes.INCREASE_QUANTITY,
        payload: id
    };
}

export const decreaseQuantity = (id) => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: id
})