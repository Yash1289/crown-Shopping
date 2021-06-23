import React from "react"
import "./checkout-item.styles.scss"
import { clearItem , addItem , removeItem } from "../../redux/cart/cartAction"
import { connect } from "react-redux"


const CheckoutItem = ({ cartItem  , removeItem , addItem , clearItem}) =>{ 
    const { name, price, imageUrl, id, quantity } = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
            <span className="value">{quantity}</span>
            <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div onClick={() => clearItem(id)} className="remove-button">&#10005;</div>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    clearItem : (id) => dispatch(clearItem(id)),
    addItem : (item) => dispatch(addItem(item)),
    removeItem : (item) => dispatch(removeItem(item))
})

export default connect(undefined , mapDispatchToProps)(CheckoutItem)