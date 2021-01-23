import  CART_ACTIONS from './actions.types';

export const  addItemToCart = (item) => {
    console.log('items', item );
    return{
        type:   CART_ACTIONS.ADD_ITEMS_TO_CART,
        payload: item
    }
};

export const  emptyCart = (item) => ({
    type:   CART_ACTIONS.CLEAR_CART
})