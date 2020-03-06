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
