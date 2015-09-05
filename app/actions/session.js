import * as types from '../types/session';
import * as utils from '../utils/session';

export function create(username, password) {
  return {
    type: types.CREATE_SESSION,
    payload: {
      promise: utils.create({
        username: username,
        password: password
      })
      onSuccess,
      onError
    }
  };
}
