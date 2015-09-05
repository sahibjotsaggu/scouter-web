import * as types from '../types/user';

const defaultState = {};

/*
 * @param {object} state The previous state
 * @param {object} action The dispatched action
 * @returns {object} state The updated state
 */
export default function session(state = defaultState, action) {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
}
