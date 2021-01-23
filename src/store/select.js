import {createSelector} from 'reselect';

export const cart = (store) => store.cart;

export const totalCartItems = createSelector([cart], cart => cart.cartItems.length);

export const cartItems = createSelector([cart], cart => cart.cartItems);