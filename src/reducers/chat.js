import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const INITIAL_STATE = {
    isloading: false,
};
export const chat = createReducer(INITIAL_STATE, {
    [types.SEND_MESSAGE](state, action) {
        return {
            ...state,
            message: action.message,
        };
    },

});
