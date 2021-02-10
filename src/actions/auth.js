import * as types from './types';
import Api from '../lib/requests/api';
import Storage from '../lib/requests/storage';
import {ToastAndroid} from 'react-native';

function setIsLoading(isLoading) {
  return {
    type: types.IS_LOADING,
    isLoading,
  };
}

function userInfoAction(userInfo) {
  return {
    type: types.FETCH_USER_INFO,
    userInfo,
  };
}

function setForgotValidationError(errors) {
  return {
    type: types.IS_FORGOT_VALIDATION_ERROR,
    errors,
  };
}

// export function test(text) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     console.log("saving text: ", text)
//     dispatch(storeText(text))
//   }
// }

export function login(params, navigate) {
  return dispatch => {
    dispatch(setIsLoading(true));

    Api.post('rest-auth/login/', params)
      .then(resp => {
        // Storage.storeData("currentUser", resp.user)
        Storage.storeData('access_token', resp);
        dispatch(setIsLoading(false));

        ToastAndroid.showWithGravity(
          'Logged In Successes',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
        navigate('Home');
      })
      .catch(err => {
        console.warn('err', err);
        ToastAndroid.showWithGravity(
          'Email or Password is not valid',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
        dispatch(setForgotValidationError(err.errors));

        dispatch(setIsLoading(false));
      });
  };
}

export function signUp(params, navigate) {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.post('rest-auth/registration/', params)
      .then(resp => {
        // navigation.navigate('SignUpVerification', {
        //   email: params.email,
        // });
        // alert("Account Created Sign In To Continue")

        navigate('Login');
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // console.log("errrorrss", err)

        dispatch(setForgotValidationError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}
export function getUser() {
  return dispatch => {
    dispatch(setIsLoading(true));
    Api.get(`api/v1/profile/`)
      .then(resp => {
        // dispatch(userInfoAction(resp.user))
        dispatch(setIsLoading(false));
      })
      .catch(err => {
        // if (err.errorDetails.name === 'TokenExpiredError') {
        //   // navigate('Login')
        // }
        // if (err.errorDetails) {
        //   if (errorDetails.name === 'TokenExpiredError') {

        //   }
        // }
        dispatch(setForgotValidationError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}
// export function updateProfile(id, params) {
//   console.log("id", params)
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.put(`user/${id}`, params)
//       .then((resp) => {
//         console.log("user updated", resp)
//         // dispatch(userInfoAction(resp.user))
//         dispatch(setIsLoading(false));
//       })
//       .catch((err) => {
//         console.log(err)
//         dispatch(setForgotValidationError(err.errors));
//         dispatch(setIsLoading(false));
//       });
//   };
// }
// export function updatePassword(id, params) {
//   console.log("id", params)
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.put(`user/updatePassword/${id}`, params)
//       .then((resp) => {
//         console.log("pass updated", resp)
//         // dispatch(userInfoAction(resp.user))
//         dispatch(setIsLoading(false));
//       })
//       .catch((err) => {
//         console.log(err)
//         dispatch(setForgotValidationError(err.errors));
//         dispatch(setIsLoading(false));
//       });
//   };
// }
// export function forgetPassword(params, navigation) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.post('passwords/reset', params)
//       .then((resp) => {
//         navigation.navigate('ForgotPasswordVerification', {
//           email: params.email,
//         });
//         dispatch(setIsLoading(false));
//       })
//       .catch((err) => {
//         dispatch(
//           setForgotValidationError([
//             {
//               messageTitle: "Something's wrong",
//               messageDescription:
//                 "We couldn't find your email in our database. Are you sure you created your account?",
//             },
//           ]),
//         );
//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function resetForgotVerificationError() {
//   return (dispatch) => {
//     dispatch(setForgotValidationError());
//   };
// }

// export function VerifyCode(params, navigation, component) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.post(`validation/${params.email}/${params.token}`)
//       .then((resp) => {
//         if (component === 'signUpVerification') {
//           navigation.navigate('PopUp', { route: 'Account created succesfully!' });
//           dispatch(setIsLoading(false));
//         } else {
//           navigation.navigate('ResetPassword', { email: params.email });
//           dispatch(setIsLoading(false));
//         }
//       })
//       .catch((err) => {
//         console.log(err.errors);
//         if (component === 'signUpVerification') {
//           // dispatch(setForgotValidationError(err.errors))
//         } else {
//           dispatch(setForgotValidationError(err.errors));
//         }

//         dispatch(setIsLoading(false));
//       });
//   };
// }

// export function resetPassword(params, navigation) {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     Api.put('passwords/update', params)
//       .then((resp) => {
//         navigation.navigate('PopUp', { route: 'Password Reset Succesfully! ' });
//         dispatch(setIsLoading(false));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(setForgotValidationError(err.errors));
//         dispatch(setIsLoading(false));
//       });
//   };
// }
