import * as types from '../types/locations';
import * as utils from '../utils/location';

export function search(query, onSuccess, onError) {
  return {
    type: types.SEARCH_LOCATIONS,
    payload: {
      promise: utils.getAll()
      onSuccess,
      onError
    }
  };
}
