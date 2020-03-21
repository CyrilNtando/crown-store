import { ActionTypes } from './types.actions';

export const setCurrentUser = user => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
//SIGN IN WITH GOOGLE
export const googleSignInStart = () => ({
  type: ActionTypes.GOOGLE_SIGN_IN_START
});

//SIGN IN WITH EMAIL
export const emailSignInStart = emailAndPassword => ({
  type: ActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
export const signInSuccess = user => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: ActionTypes.SIGN_IN_FAILURE,
  payload: error
});
export const signOutStart = () => ({
  type: ActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: ActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
  type: ActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
export const checkUserSession = () => ({
  type: ActionTypes.CHECK_USER_SESSION
});

export const signUpstart = userCredentials => ({
  type: ActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: ActionTypes.SIGN_UP_FAILURE,
  payload: error
});
