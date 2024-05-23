export const addToCart = (id) => {
    return{
        type: "ADD_TO_CART",
        payload: id
    }
}

export const delFromCart = (id, all = false) =>
    all
    ? {type: "REMOVE_ALL_FROM_CART", payload: id}
    : {type: "REMOVE_ONE_FROM_CART", payload: id};

export const clearCart = () => {
    return{
        type: "CLEAR_CART"
    }
}

export const viewCart = () => {
    return {
        type: "VIEW_CART"       
    }
}