import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isloading: false,
  submitLoading: false,
};
export const faq = createReducer(INITIAL_STATE, {
  [types.ALL_FAQ](state, action) {
    return {
      ...state,
      faqList: action.faqList,
    };
  },

  [types.ADD_FAQ](state, action) {
    return {
      ...state,
      subFaq: action.subFaq,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },

  [types.SUBMIT_LOADING](state, action) {
    return {
      ...state,
      submitLoading: action.submitLoading,
    };
  },
});
