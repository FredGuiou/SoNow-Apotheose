import { useSelector } from 'react-redux';

import Authentification from './Authentification';

const withAuth = (Component) => {
  return () => {
      const user = useSelector((state)=> state.user.isConnected);
      if (user) {
        return <Component/>;
      } else {
        return <Authentification/>
      }
  };
};

export default withAuth;