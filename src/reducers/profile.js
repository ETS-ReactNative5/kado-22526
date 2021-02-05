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

  [types.DELETE_PROFILE](state, action) {
    return {
      ...state,
      userDeleteData: action.userDeleteData,
    };
  },

  [types.GET_USER_DETAIL](state, action) {
    return {
      ...state,
      profileData: action.profileData,
    };
  },

  [types.UPDATE_PROFILE_ID](state, action) {
    return {
      ...state,
      profileUpdate: action.profileUpdate,
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
