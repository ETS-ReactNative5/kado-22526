import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
    isloading: false
}
export const products = createReducer(
    INITIAL_STATE,
    {
        [types.FETCH_ALL_PRODUCTS](state, action) {
            return {
                ...state,
                allProducts: action.allProducts,
            };
        },
        [types.IS_LOADING_PRODUCTS](state, action) {
            return {
                ...state,
                isloading: action.loading,

            };
        },
        [types.FETCH_USER_ORDERS](state, action) {
            return {
                ...state,
                userOrders: action.userOrders,

            };
        },

    },
);
