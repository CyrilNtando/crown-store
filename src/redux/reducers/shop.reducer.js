import { ActionTypes } from '../actions/types.actions';
const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
      break;
    default:
      return state;
      break;
  }
};

export default shopReducer;
