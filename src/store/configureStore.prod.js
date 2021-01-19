import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Storage from '../lib/requests/storage';
import reducer from '../reducers';

/* eslint-disable */
function configureStore(initialState) {
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

  const store = finalCreateStore(reducer, initialState);

  return store;
}

function getAuthenticated() {
  let isAuthenticated = Storage.retrieveData('isAuthenticated');
  if (typeof isAuthenticated == 'string') {
    return isAuthenticated === 'true';
  }
  if (typeof isAuthenticated == 'boolean') {
    return isAuthenticated;
  }
  return false;
}

const store = configureStore({
  auth: {
    isAuthenticated: getAuthenticated(),
    currentUser: Storage.retrieveData('currentUser'),
    isLoading: false,
  },
});

export default store;
