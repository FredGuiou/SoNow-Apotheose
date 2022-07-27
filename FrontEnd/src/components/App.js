import { Routes, Route } from 'react-router-dom';
// import DistanceCalculator from 'distance-calculator-js';

import '../styles/App.scss';
import Authentification from './Authentification';
import CreateAccount from './CreateAccount';
import CreateEvent from './CreateEvent';
import Fav from './Fav';
import Feed from './Feed';
import Filters from './Filters';
import FriendsList from './FriendsList';
import Nav from './Nav';
import Profile from './Profile';
import Search from './Search';
import Error404 from './Error404';
import EventCardDescription from './EventCardDescription';

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

  // const [user, setUser] = useState({});
  
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
          path='/discribe'
          element={(
            <>
              <EventCardDescription />
              <Nav />
            </>
          )}
        />
      <Route
          path='/'
          element={(
              <Authentification />
          )}
        />
        <Route
          path='/creer-un-compte'
          element={(
            <CreateAccount />
          )}
        />
        <Route
          path='/feed'
          element={(
            <>
            <Feed />
            <Nav />
            </>
          )}
        />
        <Route
          path='/favoris'
          element={(
            <>
            <Fav />
            <Nav />
            </>
          )}
        />
        <Route
          path='/autour-de-moi'
          element={(
            <>
            <Search />
            <Nav />
            </>
          )}
        />
        <Route
          path='/autour-de-moi/filtres'
          element={(
            <>
            <Filters />
            <Nav />
            </>
          )}
        />
        <Route
          path='/creer-un-evenement'
          element={(
            <>
            <CreateEvent />
            <Nav />
            </>
          )}
        />
        <Route
          path='/mon-compte'
          element={(
            <>
            <Profile  />
            <Nav />
            </>
          )}
        />
        <Route
          path='/mon-compte/amis'
          element={(
            <>
            <FriendsList />
            <Nav />
            </>
          )}
        />
        <Route
          path='*'
          element={(
            <>
            <Error404 />
            <Nav />
            </> 
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
