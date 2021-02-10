import Api from '../lib/requests/api';
import * as types from './types';

export function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

function getThreads(data) {
  return {
    type: types.THREAD_LIST,
    data,
  };
}

export function fetchThreads(searchQuery = '') {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/inbox/?q=${searchQuery}`)
      .then(resp => {
        dispatch(getThreads(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        dispatch(setIsLoading(false));
      });
  };
}
