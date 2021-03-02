import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isloading: false,
  categoryList: [],
};
export const category = createReducer(INITIAL_STATE, {
  [types.ALL_CATEGORIES](state, action) {
    return {
      ...state,
      categoryList: action.categoryList,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },
});
