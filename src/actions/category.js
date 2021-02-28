import Api from '../lib/requests/api';
import * as types from './types';

function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

function getCategories(categoryList) {
  return {
    type: types.ALL_CATEGORIES,
    categoryList,
  };
}

export function fetchCategories() {
  return dispatch => {
    Api.get('api/v1/category/job/')
      .then(resp => {
        dispatch(getCategories(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        dispatch(setIsLoading(false));
      });
  };
}
