import Api from '../lib/requests/api';
import * as types from './types';

function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

function getFaq(faqList) {
  return {
    type: types.ALL_FAQ,
    faqList: faqList,
  };
}

function submitFaq(subFaq) {
  return {
    type: types.ADD_FAQ,
    subFaq: subFaq,
  };
}

export function fetchFaq() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/faq/`)
      .then(resp => {
        dispatch(getFaq(resp));
        dispatch(setIsLoading(false));
        console.log('dalmasasdasd', resp);
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchAllFaq(text) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/faq/?search=${text}`)
      .then(resp => {
        dispatch(getFaq(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function addFaq(data) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.post(`api/v1/faq/`, data)
      .then(resp => {
        dispatch(submitFaq(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}