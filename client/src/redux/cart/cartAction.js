

const toggleCart = () => ( {
    type : "TOGGLE_CART_HIDDEN"
})

const addItem = (item) => ({
    type : "ADD_CART_ITEM" ,
    item 
})

const clearItem = (id) => ({
    type : "CLEAR_CART_ITEM" ,
    id
})

const removeItem = (item) => ({
    type : "REMOVE_CART_ITEM" ,
    item
})

const clearCart = () => ({
    type : "CLEAR_ALL_CART"
})

export { toggleCart , addItem , clearItem , removeItem , clearCart}