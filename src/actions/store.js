// import * as types from './types';
// import Api from '../lib/requests/api';
// import Storage from '../lib/requests/storage'
// function setIsLoading(loading) {
//   return {
//     type: types.IS_LOADING_STORE,
//     loading,
//   };
// }

// function setNewProduct(product) {
//   return {
//     type: types.CREATE_NEW_PRODUCT,
//     product,
//   };
// }

// function fetchProductsAction(products) {
//   return {
//     type: types.FETCH_ALL_PRODUCTS,
//     products
//   }
// }

// function createdCartAction(record) {
//   return {
//     type: types.CREATE_CART,
//     record
//   }
// }

// function getOrderOfGroupBuySessionAction(orders) {
//   return {
//     type: types.GET_ORDER_GROUP_BUY_SESSION,
//     orders
//   }
// }
// function getOrderOfUserAction(userorders) {
//   return {
//     type: types.GET_ORDER_USER,
//     userorders
//   }
// }
// export function addNewProduct(params) {
//   return (dispatch) => {
//     console.log(params)
//     dispatch(setIsLoading(true));
//     Api.post('product', params)
//       .then((resp) => {
//         console.log("product added", resp)
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function fetchProducts(params) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.get(`product/${params}/products`)
//       .then((resp) => {
//         console.log("product fetched", resp)
//         dispatch(fetchProductsAction(resp.data))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function createCart(params) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.post(`cart`, params)
//       .then((resp) => {
//         console.log("cart created", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         dispatch(createdCartAction(resp.data))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function createOrder(params) {
//   console.log("pararrr", params)
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.post(`order`, params)
//       .then((resp) => {
//         console.log("order created", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         // dispatch(createdCartAction(resp.data))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }


// export function getOrderOfGroupBuySession(id) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.get(`order/${id}/orders`)
//       .then((resp) => {
//         console.log("new orders", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         dispatch(getOrderOfGroupBuySessionAction(resp.data))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function changeOrderStatus(id, param) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.put(`order/${id}/paymentStatus`, param)
//       .then((resp) => {
//         console.log("resp is", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         dispatch(getOrderOfGroupBuySession(resp.data.group_buy_session_id))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function getOrderOfUser(id) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.get(`order/${id}/userOrders`)
//       .then((resp) => {
//         console.log("resp ", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         dispatch(getOrderOfUserAction(resp.data))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function updateProduct(id, param, navigate) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.put(`product/${id}`, param)
//       .then((resp) => {
//         console.log("updated", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         // dispatch(getOrderOfUserAction(resp.data))
//         navigate('HomePageScreenContainer')
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function deleteProduct(id, navigate) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.delete(`product/${id}`)
//       .then((resp) => {
//         console.log("deleted", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         // dispatch(getOrderOfUserAction(resp.data))
//         navigate('HomePageScreenContainer')
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function deleteOrder(id, userId) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.delete(`order/${id}`)
//       .then((resp) => {
//         console.log("deleted", resp)
//         // Storage.removeData('cartData')
//         // Storage.storeData('finalCart',resp.data)
//         // dispatch(getOrderOfUserAction(resp.data))
//         dispatch(getOrderOfUser(userId))
//       })
//       .catch((err) => {
//         console.log("errr", err)
//         dispatch(setIsLoading(false));
//       });
//   };
// }