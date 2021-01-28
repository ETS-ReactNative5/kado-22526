import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isloading: false,
  updateLoading: false,
};

export const profile = createReducer(INITIAL_STATE, {
  [types.USER_PROFILE](state, action) {
    return {
      ...state,
      profileDetail: action.profileDetail,
    };
  },

  [types.UPDATE_PROFILE](state, action) {
    return {
      ...state,
      updateProfileList: action.updateProfileList,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },

  [types.UPDATE_LOADING](state, action) {
    return {
      ...state,
      updateLoading: action.updateLoading,
    };
  },
});
