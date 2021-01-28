import {combineReducers} from 'redux';
import * as authReducer from './auth';
// import * as groupsReducer from './groups'
import * as featureAds from './featureAds';
import * as products from './products';
import * as jobs from './jobs';
import * as profile from './profile';
// import * as sessionStore from './store'
// export default combineReducers(Object.assign(authReducer, groupsReducer, groupsBuySession,sessionStore));
export default combineReducers(
  Object.assign(authReducer, featureAds, products, jobs, profile),
);
