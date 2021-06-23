import { addItemToCart , removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
    hidden : true ,
    cartItems : []
}

const cartReducer = ( state = INITIAL_STATE , action) => {
    switch (action.type) {
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state ,
                hidden : !state.hidden
            }
        case "ADD_CART_ITEM" : 
            return {
                hidden : state.hidden ,
                cartItems : addItemToCart(state.cartItems , action.item)
            }
        case "CLEAR_CART_ITEM" :
            return {
                hidden : state.hidden ,
                cartItems : state.cartItems.filter((cartItem) => cartItem.id !== action.id)
            }
        case "REMOVE_CART_ITEM" : 
            return {
                hidden : state.hidden ,
                cartItems : removeItemFromCart(state.cartItems , action.item)
            }   
        case "CLEAR_ALL_CART" :
            return {
                hidden : state.hidden ,
                cartItems : []
            } 
        default:
            return state
    }
}

export default cartReducer 