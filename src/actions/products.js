import * as types from './types';
import Api from '../lib/requests/api';
// import { featureAds } from '../reducers/featureAds';

function fetchAllProductsAction(allProducts) {
  return {
    type: types.FETCH_ALL_PRODUCTS,
    allProducts,
  };
}

function fetchUserOrdersAction(userOrders) {
  return {
    type: types.FETCH_USER_ORDERS,
    userOrders,
  };
}

//for loader

function setIsLoadingGroup(loading) {
  return {
    type: types.IS_LOADING_PRODUCTS,
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

export function fetchAllProducts() {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(`product/?page=1&limit=25`)
      .then(resp => {
        // console.log("data of products", resp)
        dispatch(fetchAllProductsAction(resp.products));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}

export function fetchProductsBySearchKey(params) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(
      `product/?page=1&limit=25&brandOrModel=${
        params.search ? params.search : ''
      }&brand=${params.make ? params.make : ''}&lowestPrice=${parseInt(
        params.lowestPrice,
      )}&highestPrice=${parseInt(params.highestPrice)}=&model=${
        params.model ? params.model : ''
      }&colours=${params.color ? params.color : ''}`,
    )
      .then(resp => {
        console.log('search results', resp);
        dispatch(fetchAllProductsAction(resp.products));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}
export function fetchUsersOrders(id) {
  return dispatch => {
    dispatch(setIsLoadingGroup(true));
    Api.get(`order/userId/${id}`)
      .then(resp => {
        console.log('data of user orders', resp);
        dispatch(fetchUserOrdersAction(resp.orders));
        dispatch(setIsLoadingGroup(false));
      })
      .catch(err => {
        // dispatch(setfetchCommunityGroupError(err.errors));
        dispatch(setIsLoadingGroup(false));
      });
  };
}
