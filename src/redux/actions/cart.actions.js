import { ActionTypes } from './types.actions';

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: ActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: ActionTypes.CLEAR_CART
});
