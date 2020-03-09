import { ActionTypes } from '../actions/types.actions';
import { addItemToCart, removeItemFromCart } from '../../utils/cart.utils';

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
    case ActionTypes.ADD_ITEM:
      {
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
      }
      break;
    case ActionTypes.REMOVE_ITEM:
      {
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      }
      break;
    case ActionTypes.CLEAR_ITEM_FROM_CART:
      {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        };
      }
      break;

    default:
      return state;
  }
};

export default cartReducer;
