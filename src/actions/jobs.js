import Api from '../lib/requests/api';
import * as types from './types';

function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
  };
}

function setFavoriteLoading(favoriteLoading) {
  return {
    type: types.FAVORITE_LOADING,
    favoriteLoading,
  };
}

function getJobs(jobList) {
  return {
    type: types.JOBS_LIST,
    jobList: jobList,
  };
}

function getSavedJobs(saveJobsList) {
  return {
    type: types.SAVED_JOBS,
    saveJobsList: saveJobsList,
  };
}

function getJobsCategories(josCategoryList) {
  return {
    type: types.JOBS_CATEGORY,
    josCategoryList: josCategoryList,
  };
}

function getTypesProject(typeProList) {
  return {
    type: types.PROJECT_TYPES,
    typeProList: typeProList,
  };
}

function getSortBy(sortbyList) {
  return {
    type: types.SORT_BY,
    sortbyList: sortbyList,
  };
}

function addFavorite(addFavorite) {
  return {
    type: types.ADD_FAVORITE,
    addFavorite: addFavorite,
  };
}

function removeFavoriteJob(removeJob) {
  return {
    type: types.REMOVE_FAVORITE,
    removeJob: removeJob,
  };
}

function jobSearch(searchJobList) {
  return {
    type: types.REMOVE_FAVORITE,
    searchJobList: searchJobList,
  };
}

export function fetchJobs() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function getJobsAfter() {
  return dispatch => {
    // dispatch(setIsLoading(true));
    Api.get(`api/v1/job/`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        // dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        // dispatch(setIsLoading(false));
      });
  };
}

export function searchJobs(name) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/?q=${name}`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchAlljOBS(param, sortbyString, min_pay, min_amount) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/?${param}=${sortbyString}&${min_pay}=${min_amount}`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchAllJobsAmount(min_type, min_amount, max_type, max_amount) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/?${min_type}=${min_amount}&${max_type}=${max_amount}`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchAllJobsDate(start_date, from_date, end_date, to_date) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/?${start_date}=${from_date}&${end_date}=${to_date}`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchAllSavedJobs() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/saved/job/`)
      .then(resp => {
        dispatch(getSavedJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchAllSavedJobsAfter() {
  return dispatch => {
    // dispatch(setIsLoading(true));
    Api.get(`api/v1/saved/job/`)
      .then(resp => {
        dispatch(getSavedJobs(resp?.results));
        // dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        // dispatch(setIsLoading(false));
      });
  };
}

export function searchSavedJobsByName(name) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/saved/job/?q=${name}`)
      .then(resp => {
        dispatch(getSavedJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchjobsCategory() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job_category_types`)
      .then(resp => {
        dispatch(getJobsCategories(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchProjectsType() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job_types`)
      .then(resp => {
        dispatch(getTypesProject(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchSortBy(param, sortbyString) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/?${param}=${sortbyString}`)
      .then(resp => {
        dispatch(getSortBy(resp));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        dispatch(setIsLoading(false));
      });
  };
}

export function addFavoriteJob(job_id, data) {
  return dispatch => {
    dispatch(setFavoriteLoading(true));
    Api.put(`api/v1/job/${job_id}/`, data)
      .then(resp => {
        dispatch(addFavorite(resp));
        dispatch(setFavoriteLoading(false));
      })
      .catch(err => {
        dispatch(setFavoriteLoading(false));
      });
  };
}

export function removeFavorite(job_id, data) {
  return dispatch => {
    dispatch(setFavoriteLoading(true));
    Api.put(`api/v1/job/${job_id}/`, data)
      .then(resp => {
        dispatch(removeFavoriteJob(resp));
        dispatch(setFavoriteLoading(true));
      })
      .catch(err => {
        dispatch(setFavoriteLoading(true));
      });
  };
}
