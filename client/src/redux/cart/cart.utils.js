export const addItemToCart = (cartItems , cartItemToAdd) => {

    const cartItemExist = cartItems.find( (cartItem) => cartItem.id === cartItemToAdd.id )

    if(cartItemExist) {
        return cartItems.map((cartItem) => {
            return cartItem.id === cartItemToAdd.id ? 
            ({ ...cartItem , quantity : cartItem.quantity + 1}) :
            ({ ...cartItem })
        })
    }

    return [ ...cartItems , { ...cartItemToAdd , quantity : 1 } ]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    else{
        return cartItems.map((cartItem) => {
            return cartItem.id === cartItemToRemove.id ?
                ({ ...cartItem, quantity: cartItem.quantity - 1 }) :
                ({ ...cartItem })
        })
    }
}