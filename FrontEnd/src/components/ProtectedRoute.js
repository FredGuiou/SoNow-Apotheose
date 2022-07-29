import Authentification from './Authentification';

const withAuth = (Component) => {
  return () => {
      const isConnected = localStorage.getItem('accessToken');
      console.log('isConnected ' + isConnected);
      if (isConnected) {
        return <Component/>;
      } else {
        return <Authentification/>
      }
  };
};

export default withAuth;