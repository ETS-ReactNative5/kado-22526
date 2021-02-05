import Api from '../lib/requests/api';
import * as types from './types';

function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

function getCompanies(companyList) {
  return {
    type: types.COMPANY_LIST,
    companyList: companyList,
  };
}

function getSingleCompanies(singleCompany) {
  return {
    type: types.SINGLE_COMPANY,
    singleCompany: singleCompany,
  };
}

export function fetchCompanies() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/?profile_type=company`)
      .then(resp => {
        dispatch(getCompanies(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchCompanyByName(companyName) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/?profile_type=company&search=${companyName}`)
      .then(resp => {
        dispatch(getSingleCompanies(resp));
        dispatch(setIsLoading(false));
        dispatch(getCompanies(resp));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}
