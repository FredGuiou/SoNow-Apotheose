import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <div className='App'>
      
      <Nav />

      <Routes>
      <Route
          path='/'
          element={(
              <Authentification />
          )}
        />
        <Route
          path='/authentification'
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
            <Feed />
          )}
        />
        <Route
          path='/favoris'
          element={(
            <Fav />
          )}
        />
        <Route
          path='/autour-de-moi'
          element={(
            <Search />
          )}
        />
        <Route
          path='/autour-de-moi/filtres'
          element={(
            <Filters />
          )}
        />
        <Route
          path='/creer-un-evenement'
          element={(
            <CreateEvent /> 
          )}
        />
        <Route
          path='/mon-compte'
          element={(
            <Profile  />
          )}
        />
        <Route
          path='/mon-compte/amis'
          element={(
            <FriendsList />
          )}
        />
        <Route
          path='*'
          element={(
            <Error404 /> 
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
