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

function setProfileFavLoading(favProfileLoading) {
  return {
    type: types.UPDATE_LOADING,
    favProfileLoading,
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

function getProfileId(profileData) {
  return {
    type: types.GET_USER_DETAIL,
    profileData: profileData,
  };
}

function updateProfileId(profileUpdate) {
  return {
    type: types.UPDATE_PROFILE_ID,
    profileUpdate: profileUpdate,
  };
}

function getStudents(studentsList) {
  return {
    type: types.STUDENTS_LIST,
    studentsList: studentsList,
  };
}

function getFavStudents(favStudentList) {
  return {
    type: types.FAV_STUDENTS_LIST,
    favStudentList: favStudentList,
  };
}

function submitFavStudent(addFavStudentData) {
  return {
    type: types.ADD_FAV_STUDENTS,
    addFavStudentData: addFavStudentData,
  };
}

function removeFavStdnt(removeFavStudentData) {
  return {
    type: types.REMOVE_FAV_STUDENT,
    removeFavStudentData: removeFavStudentData,
  };
}

export function fetchProfile(profile_id) {
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

export function updatePhoto(profile_id, param) {
  console.log('paramsdasdasd', param);
  return dispatch => {
    dispatch(updateProfileLoading(true));
    Api.putMultiForm(`api/v1/profile/${profile_id}/`, param)
      .then(resp => {
        dispatch(updateProfileFunc(resp));
        dispatch(updateProfileLoading(false));
      })
      .catch(err => {
        console.log('error', err);
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(updateProfileLoading(false));
      });
  };
}

export function updateProfile(profile_id, param, navigate) {
  return dispatch => {
    dispatch(updateProfileLoading(true));
    Api.put(`api/v1/profile/${profile_id}/`, param)
      .then(resp => {
        dispatch(updateProfileFunc(resp));
        dispatch(updateProfileLoading(false));
        navigate('Profile');
        console.log('alsas', resp);
      })
      .catch(err => {
        console.log('error', err);
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(updateProfileLoading(false));
      });
  };
}

export function getProfileById(profile_id) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/${profile_id}/`)
      .then(resp => {
        dispatch(getProfileId(resp));
        dispatch(setIsLoading(false));
        navigate('Profile');
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function updateProfileById(profile_id, params, navigate) {
  console.log('salman Raheel');
  return dispatch => {
    dispatch(updateProfileLoading(true));
    Api.put(`api/v1/profile/${profile_id}/`, params)
      .then(resp => {
        console.log('updated profile', resp);
        dispatch(updateProfileId(resp));
        dispatch(updateProfileLoading(false));
        navigate('NewsFeed');
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(updateProfileLoading(false));
      });
  };
}

export function userDelete(user_id, navigate) {
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

export function fetchStudents() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/?profile_type=student`)
      .then(resp => {
        dispatch(getStudents(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchStudentsByName(name) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/?profile_type=student&search=${name}`)
      .then(resp => {
        dispatch(getStudents(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchStudentsAfter() {
  return dispatch => {
    dispatch(setProfileFavLoading(true));
    Api.get(`api/v1/profile/?profile_type=student`)
      .then(resp => {
        dispatch(getStudents(resp));
        dispatch(setProfileFavLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setProfileFavLoading(false));
      });
  };
}

export function fetchFavStudents() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/?profile_type=student&favorite=true`)
      .then(resp => {
        dispatch(getFavStudents(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchFavStudentsByName(name) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/?profile_type=student&favorite=true&search=${name}`)
      .then(resp => {
        dispatch(getFavStudents(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchFavStudentsAfter() {
  return dispatch => {
    dispatch(setProfileFavLoading(true));
    Api.get(`api/v1/profile/?profile_type=student&favorite=true`)
      .then(resp => {
        dispatch(getFavStudents(resp));
        dispatch(setProfileFavLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setProfileFavLoading(false));
      });
  };
}

export function addFavStudent(profile_id, body) {
  return dispatch => {
    dispatch(setProfileFavLoading(true));
    Api.put(`api/v1/profile/${profile_id}/`, body)
      .then(resp => {
        dispatch(submitFavStudent(resp));
        dispatch(setProfileFavLoading(false));
        console.log('resp', resp);
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setProfileFavLoading(false));
      });
  };
}

export function removeFavStudent(profile_id, body) {
  return dispatch => {
    dispatch(setProfileFavLoading(true));
    Api.put(`api/v1/profile/${profile_id}/`, body)
      .then(resp => {
        dispatch(removeFavStdnt(resp));
        dispatch(setProfileFavLoading(false));
        console.log('resp', resp);
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setProfileFavLoading(false));
      });
  };
}
