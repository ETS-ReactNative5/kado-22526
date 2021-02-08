import Api from '../lib/requests/api';
import * as types from './types';

function setIsLoading(isloading) {
    return {
        type: types.IS_LOADING,
        isloading,
    };
}
function sendMessage(message) {
    return {
        type: types.SEND_MESSAGE,
        message,
    };
}


export function intializeChat(param) {
    return dispatch => {
        dispatch(setIsLoading(true));
        Api.post(`api/v1/chat/`, param)
            .then(resp => {
                // dispatch(getCompanies(resp));
                console.log("chat is ", resp)
                dispatch(sendMessage(resp));
                dispatch(setIsLoading(false));
            })
            .catch(err => {
                // dispatch(setfetchCommunityGroupError(err.errors));
                dispatch(setIsLoading(false));
            });
    };
}

