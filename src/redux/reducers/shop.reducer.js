import { ActionTypes } from '../actions/types.actions';
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
      break;
    case ActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
      break;
    case ActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
      break;
    default:
      return state;
  }
};

export default shopReducer;
