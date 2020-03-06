import { ActionTypes } from '../actions/types.actions';
import { addItemToCart } from '../../utils/cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
      break;
    case ActionTypes.ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
