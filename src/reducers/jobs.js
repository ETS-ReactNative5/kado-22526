import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isloading: false,
  favoriteLoading: false,
};
export const jobs = createReducer(INITIAL_STATE, {
  [types.JOBS_LIST](state, action) {
    return {
      ...state,
      jobList: action.jobList,
    };
  },

  [types.ALL_JOBS](state, action) {
    return {
      ...state,
      allJobs: action.allJobs,
    };
  },

  [types.SAVED_JOBS](state, action) {
    return {
      ...state,
      saveJobsList: action.saveJobsList,
    };
  },

  [types.JOBS_CATEGORY](state, action) {
    return {
      ...state,
      josCategoryList: action.josCategoryList,
    };
  },

  [types.PROJECT_TYPES](state, action) {
    return {
      ...state,
      typeProList: action.typeProList,
    };
  },

  [types.ADD_FAVORITE](state, action) {
    return {
      ...state,
      addFavorite: action.addFavorite,
    };
  },

  [types.REMOVE_FAVORITE](state, action) {
    return {
      ...state,
      removeJob: action.removeJob,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },

  [types.FAVORITE_LOADING](state, action) {
    return {
      ...state,
      favoriteLoading: action.favoriteLoading,
    };
  },
});
