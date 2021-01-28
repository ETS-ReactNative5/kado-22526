import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
};

export const auth = createReducer(INITIAL_STATE, {
  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  },
  [types.IS_FORGOT_VALIDATION_ERROR](state, action) {
    return {
      ...state,
      forgotValidationError: action.errors,
    };
  },
  [types.FETCH_USER_INFO](state, action) {
    return {
      ...state,
      userInfo: action.userInfo,
    };
  },
  [types.TEXT_STORE](state, action) {
    return {
      ...state,
      text: action.text,
    };
  },
});
