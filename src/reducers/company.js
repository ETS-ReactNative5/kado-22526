import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isloading: false,
};
export const company = createReducer(INITIAL_STATE, {
  [types.COMPANY_LIST](state, action) {
    return {
      ...state,
      companyList: action.companyList,
    };
  },

  [types.SINGLE_COMPANY](state, action) {
    return {
      ...state,
      singleCompany: action.singleCompany,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },
});
