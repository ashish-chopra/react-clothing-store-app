import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, clearItem, increaseQuantity, decreaseQuantity}) => {
    const { name, quantity, price, imageUrl } = item;
    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="image" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => decreaseQuantity(item.id)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => increaseQuantity(item.id)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
    </div>);
}

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(removeItem(item)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);