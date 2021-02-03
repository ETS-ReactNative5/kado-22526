import {ToastAndroid} from 'react-native';
import Api from '../lib/requests/api';
import Storage from '../lib/requests/storage';
import * as types from './types';

function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

function updateProfileLoading(updateLoading) {
  return {
    type: types.UPDATE_LOADING,
    updateLoading,
  };
}

function getProfile(profileDetail) {
  return {
    type: types.USER_PROFILE,
    profileDetail: profileDetail,
  };
}

function updateProfileFunc(updateProfileList) {
  return {
    type: types.UPDATE_PROFILE,
    updateProfileList: updateProfileList,
  };
}

function deleteUser(userDeleteData) {
  return {
    type: types.DELETE_PROFILE,
    userDeleteData: userDeleteData,
  };
}

export function fetchProfile(profile_id) {
  console.log('saladasd', profile_id);
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/${profile_id}/`)
      .then(resp => {
        dispatch(getProfile(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function updateProfile(profile_id, param) {
  return dispatch => {
    dispatch(updateProfileLoading(true));
    Api.put(`api/v1/profile/${profile_id}/`, param)
      .then(resp => {
        dispatch(updateProfileFunc(resp));
        dispatch(updateProfileLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(updateProfileLoading(false));
      });
  };
}

export function userDelete(user_id, navigate) {
  console.log('user_id', user_id);
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.delete(`api/v1/user/${user_id}/`)
      .then(resp => {
        dispatch(deleteUser(resp));
        dispatch(setIsLoading(false));
        Storage.removeData('access_token');

        navigate('Login');
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}
