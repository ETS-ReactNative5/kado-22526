import {combineReducers} from 'redux';
import * as authReducer from './auth';
// import * as groupsReducer from './groups'
import * as featureAds from './featureAds';
import * as products from './products';
import * as jobs from './jobs';
import * as profile from './profile';
import * as company from './company';
import * as faq from './faq';
import * as thread from './thread';
import * as message from './message';

export default combineReducers(
  Object.assign(
    authReducer,
    featureAds,
    products,
    jobs,
    profile,
    company,
    faq,
    thread,
    message,
  ),
);
