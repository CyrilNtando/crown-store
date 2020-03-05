import { ActionTypes } from './types.actions';
export const setCurrentUser = user => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
