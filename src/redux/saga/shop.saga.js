import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  firestore1 as firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchCollectionSuccess,
  fetchCollectionFailure
} from '../actions/shop.actions';
import { ActionTypes } from '../actions/types.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    //call method evokes function by taking first argument as function
    //and the subsequence argument will be the parameter that you pass
    //into function call
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
