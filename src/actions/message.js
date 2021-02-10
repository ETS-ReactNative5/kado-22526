import Api from '../lib/requests/api';
import * as types from './types';

export function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

export function getMessages(data) {
  return {
    type: types.MESSAGE_LIST,
    data,
  };
}

export function fetchMessages(threadId = '') {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/thread/${threadId}/`)
      .then(resp => {
        dispatch(getMessages(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        dispatch(setIsLoading(false));
      });
  };
}
