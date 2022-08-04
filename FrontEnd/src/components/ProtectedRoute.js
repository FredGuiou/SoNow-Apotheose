import Authentification from './Authentification';

const ProtectedRoute = (Component) => {
  return () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        return <Component/>;
      } else {
        return <Authentification/>
      }
  };
};

export default ProtectedRoute;