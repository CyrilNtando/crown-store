import { ActionTypes } from '../actions/types.actions';
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };

    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case ActionTypes.SIGN_IN_FAILURE:
    case ActionTypes.SIGN_OUT_FAILURE:
    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
      break;
    case '':
      break;

    default:
      return state;
  }
};

export default userReducer;
