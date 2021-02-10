import createReducer from '../store/createReducer';
import * as types from '../actions/types';
import chatUser from '../assets/Image/chatUser.png';

const INITIAL_STATE = {
  isloading: false,
  data: {
    id: 0,
    avatar: chatUser,
    fullname: 'Fahad',
    receiverProfileId: 0,
    messages: [],
  },
};
export const message = createReducer(INITIAL_STATE, {
  [types.MESSAGE_LIST](state, action) {
    return {
      ...state,
      data: action.data,
    };
  },

  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isloading: action.isloading,
    };
  },
});
