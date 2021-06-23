import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { toggleCart } from "../../redux/cart/cartAction"

import "./cart-dropdown.styles.scss"

const CartDropdown = ({ cartItems , history , toggleCart}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
        { 
            cartItems.length ?
            cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} /> ) :
            <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton 
            onClick={() => { 
                history.push("/checkout"); 
                toggleCart()  } }
        >
            Go to Checkout
        </CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : state.cart.cartItems
})

const mapDispatchToProps = (dispatch) => ({
    toggleCart : () => dispatch(toggleCart())
})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(CartDropdown))