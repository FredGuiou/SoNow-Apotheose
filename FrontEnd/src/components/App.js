import { Routes, Route } from 'react-router-dom';
// import DistanceCalculator from 'distance-calculator-js';

import Authentification from './Authentification';
import CreateAccount from './CreateAccount';
import CreateEvent from './CreateEvent';
import ErrorBoundary from './ErrorBoundary';
import Fav from './Fav';
import Feed from './Feed';
import Filters from './Filters';
import FriendsList from './FriendsList';
import Nav from './Nav';
import Page from './Page';
import Profile from './Profile';
import Search from './Search';
import Error404 from './Error404';
import EventCardMain from './EventCardMain';

import '../styles/app.scss';

/*
// Test data
const Tokyo = { lat: 35.652832, long: 139.839478 };
const NewYork = { lat: 40.730610, long: -73.935242 };
// Use of Haversine formula 
// Result converted from meters to kilometers
const m = DistanceCalculator.calculate(Tokyo, NewYork)/1000;
console.log(m);
*/

function App() {

  // const [isLocationLoading, setIsLocationLoading] = useState(false);
  // const [latitude, setLatitude] = useState([]);
  // const [longitude, setLongitude] = useState([]);

  // useEffect(() => {

  //   function successCallback (userPosition) {
  //     setLatitude(userPosition.coords.latitude);
  //     setLongitude(userPosition.coords.longitude);
  //     setIsLocationLoading(false);
  //   };
    
  //   function errorCallback (err) {
  //     console.error(err);
  //   }; 

  //   setIsLocationLoading(true);
  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  // }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={(
            <Page title="SoNow">
            <ErrorBoundary>
              <Authentification />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/creer-un-compte'
          element={(
            <Page title="Creer un compte | SoNow">
            <ErrorBoundary>
              <CreateAccount />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/feed'
          element={(
            <Page title="Feed | SoNow">
            <ErrorBoundary>
              <Feed />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/favoris'
          element={(
            <Page title="Favoris | SoNow">
            <ErrorBoundary>
              <Fav />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/autour-de-moi'
          element={(
            <Page title="Rechercher les événements autour de moi | SoNow">
            <ErrorBoundary>
              <Search />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/autour-de-moi/filtres'
          element={(
            <Page title="Rechercher les événements autour de moi | SoNow">
            <ErrorBoundary>
              <Filters />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/creer-un-evenement'
          element={(
            <Page title="Créer un événement | SoNow">
            <ErrorBoundary>
              <CreateEvent />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/mon-compte'
          element={(
            <Page title="Mon compte | SoNow">
            <ErrorBoundary>
              <Profile  />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='/mon-compte/amis'
          element={(
            <Page title="Mes amis | SoNow">
            <ErrorBoundary>
              <FriendsList />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path="/event/:slug"
          element={(
            <Page title="Événement | SoNow">
            <ErrorBoundary>
              <EventCardMain />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
        <Route
          path='*'
          element={(
            <Page title="404 Page introuvable | SoNow">
            <ErrorBoundary>
              <Error404 />
              <Nav />
            </ErrorBoundary>
            </Page>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
