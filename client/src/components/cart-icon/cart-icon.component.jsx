import React from "react"
import { connect } from "react-redux"
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCart } from "../../redux/cart/cartAction"
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors"


const CartIcon = ({ toggleCart , itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = ( state ) => ({
    itemCount : selectCartItemsQuantity(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCart : () => dispatch(toggleCart())
})


export default connect(mapStateToProps , mapDispatchToProps)(CartIcon)