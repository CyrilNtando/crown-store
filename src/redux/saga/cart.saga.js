import { takeLatest, put, all, call } from 'redux-saga/effects';
import { ActionTypes } from '../actions/types.actions';
import { clearCart } from '../actions/cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(ActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
