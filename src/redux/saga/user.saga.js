import { takeLatest, put, all, call } from 'redux-saga/effects';
import { ActionTypes } from '../actions/types.actions';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from '../actions/user.actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getSnapshotFromUserAuth(user);
}
export function* signInWithEmail({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getSnapshotFromUserAuth(user);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(ActionTypes.SIGN_OUT_START, signOut);
}
export function* onCheckUserSession() {
  yield takeLatest(ActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(ActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(ActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signUp({
  payload: { email, password: password, displayName }
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* onSignUpSuccess() {
  yield takeLatest(ActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onSignUpStart() {
  yield takeLatest(ActionTypes.SIGN_UP_START, signUp);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
