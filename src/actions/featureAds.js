import * as types from './types';
import Api from '../lib/requests/api';
import {featureAds} from '../reducers/featureAds';

function fetchAllAdsAction(allFeatureAds) {
  return {
    type: types.FETCH_ALL_FEATURE_ADS,
    allFeatureAds,
  };
}

function fetchSearchAdsAction(searchFeatureAds) {
  return {
    type: types.FETCH_SEARCH_FEATURE_ADS,
    searchFeatureAds,
  };
}

function fetchUsersAdsAction(userAds) {
  return {
    type: types.FETCH_USER_ADS,
    userAds,
  };
}

//for loader

function setIsLoadingGroup(loading) {
  return {
    type: types.IS_LOADING_FEATURE_ADS,
    loading,
  };
}

function setfetchCommunityGroupError(errors) {
  return {
    type: types.IS_ERROR_LOADING_GROUP_BUY_SESSIONS,
    errors,
  };
}

// To Dispatch Action

export function fetchAllAds() {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(`listing/getAllFeaturedAds?page=1&limit=10`)
      .then(resp => {
        // console.log("data of feature", resp)
        dispatch(fetchAllAdsAction(resp.ads));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}

export function fetchSearchAds(brand, model) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(
      `listing/searchAd?page=1&limit=15&brand=${brand}&model=${model}&lowestPrice=0&highestPrice=1.7976931348623157e%2B308`,
    )
      .then(resp => {
        // console.log("data of search feature", resp)
        dispatch(fetchSearchAdsAction(resp.ads));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}

export function fetchAdsBySearchKey(params) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(
      `listing/searchAd?page=1&limit=25&brand=${
        params.make ? params.make : ''
      }&brandOrModel=${params.search ? params.search : ''}&featured=${
        params.feature ? params.feature : ''
      }&lowestPrice=${
        params.lowestPrice ? params.lowestPrice : 0
      }&highestPrice=${
        params.highestPrice ? params.highestPrice : '1.7976931348623157e%2B308'
      }&model=${params.model ? params.model : ''}&location=${
        params.city ? params.city : ''
      }&colours=${params.color ? params.color : ''}`,
    )
      .then(resp => {
        dispatch(fetchSearchAdsAction(resp.ads));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        dispatch(fetchSearchAdsAction([]));
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}

export function fetchUsersAds(id) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(`listing/viewMyAds/${id}`)
      .then(resp => {
        dispatch(fetchUsersAdsAction(resp.ads));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}

export function fileupload(file) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.post(`file/upload/ad`, file)
      .then(resp => {
        // dispatch(fetchUsersAdsAction(resp.ads));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        console.log(err);
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}

export function postAnAd(param, navigate) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.post(`listing/create`, param)
      .then(resp => {
        // dispatch(fetchUsersAdsAction(resp.ads));
        dispatch(setIsLoadingGroup(false));
        navigate('Home');
      })
      .catch(err => {
        console.log(err);
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}
