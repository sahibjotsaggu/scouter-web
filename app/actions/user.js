import * as types from '../types/user';
import * as utils from '../utils/user';

export function create(body) {
  return {
    type: types.CREATE_USER,
    payload: {
      promise: utils.create(body)
      onSuccess,
      onError
    }
  };
}
