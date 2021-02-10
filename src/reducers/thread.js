import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isloading: false,
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};
export const thread = createReducer(INITIAL_STATE, {
  [types.THREAD_LIST](state, action) {
    return {
      ...state,
      data: action.data,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },
});
