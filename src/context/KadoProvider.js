import React from 'react';
import Storage from '../lib/requests/storage';

export const KadoContext = React.createContext({
  userGroup: '',
  setUserGroup: () => {},
  company: {}
});

const KadoProvider = ({children}) => {
  const [userGroup, setUserGroup] = React.useState('');

  React.useEffect(() => {
    Storage.retrieveData('access_token').then(items => {
      items?.user_groups.map(item => {
        setUserGroup(item);
      });
    });
  });

  const value = React.useMemo(
    () => ({
      userGroup,
      setUserGroup,
    }),
    [userGroup],
  );

  return <KadoContext.Provider value={value}>{children}</KadoContext.Provider>;
};

export default KadoProvider;
