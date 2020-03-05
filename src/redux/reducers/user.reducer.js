import { ActionTypes } from '../actions/types.actions';
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
      break;
    case '':
      break;

    default:
      return state;
  }
};

export default userReducer;
