import * as types from '../types/location';
import * as utils from '../utils/location';

export function get(id, onSuccess, onError) {
  return {
    type: types.GET_LOCATION,
    payload: {
      promise: utils.get(id)
      onSuccess,
      onError
    }
  };
}

export function create(body, onSuccess, onError) {
  return {
    type: types.CREATE_LOCATION,
    payload: {
      promise: utils.create(body)
      onSuccess,
      onError
    }
  };
}
