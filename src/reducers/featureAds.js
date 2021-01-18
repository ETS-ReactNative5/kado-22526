import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
    isloading: false
}
export const featureAds = createReducer(
    INITIAL_STATE,
    {
        [types.FETCH_ALL_FEATURE_ADS](state, action) {
            return {
                ...state,
                allFeatureAds: action.allFeatureAds,
            };
        },
        [types.IS_LOADING_FEATURE_ADS](state, action) {
            return {
                ...state,
                isloading: action.loading,

            };
        },
        [types.FETCH_SEARCH_FEATURE_ADS](state, action) {
            return {
                ...state,
                searchFeatureAds: action.searchFeatureAds,

            };
        },
        [types.FETCH_USER_ADS](state, action) {
            return {
                ...state,
                userAds: action.userAds,

            };
        },
    },
);
