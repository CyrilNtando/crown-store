import { ActionTypes } from './types.actions';

export const updateCollections = collectionsMap => ({
  type: ActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
