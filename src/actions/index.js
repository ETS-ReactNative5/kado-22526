import * as Auth from './auth';
// import * as Groups from './groups';
import * as FeatureAds from './featureAds';
import * as Products from './products';
import * as Jobs from './jobs';
import * as Profile from './profile';
// import * as StoreOfGroup from './store'
// export const ActionCreators = Object.assign({}, Auth, Groups, GroupsBuySession,StoreOfGroup);
export const ActionCreators = Object.assign(
  {},
  Auth,
  FeatureAds,
  Products,
  Jobs,
  Profile,
);
