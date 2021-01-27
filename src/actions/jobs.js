import Api from '../lib/requests/api';
import * as types from './types';

function setIsLoading(isloading) {
  return {
    type: types.IS_LOADING,
    isloading,
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

export function fetchAlljOBS() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job/`)
      .then(resp => {
        dispatch(getJobs(resp?.results));
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        console.log('errpr', err);
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
        console.log('jobsssss', resp);
      })
      .catch(err => {
        console.log('errpr', err);
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
        console.log('jobsssss', resp);
      })
      .catch(err => {
        console.log('errpr', err);
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchProjectsType() {
  console.log('salman ');
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/job_types`)
      .then(resp => {
        dispatch(getTypesProject(resp));
        dispatch(setIsLoading(false));
        console.log('jobsssss', resp);
      })
      .catch(err => {
        console.log('errpr', err);

        dispatch(setIsLoading(false));
      });
  };
}
