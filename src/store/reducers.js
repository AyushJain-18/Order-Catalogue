import CART_ACTIONS from './actions.types';

const CART_INITIAL_STATE ={
    cartItems: []
}
const reducer = (state=CART_INITIAL_STATE, action) =>{
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEMS_TO_CART:
            return{
                        ...state,
                        cartItems: state.cartItems.concat(action.payload)
            }
        case CART_ACTIONS.CLEAR_CART:
            return{
                        ...state,
                        cartItems: []
            }
        default:
            return state
    }
}

export default reducer;