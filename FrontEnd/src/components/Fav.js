import ProtectedRoute from './ProtectedRoute';
import FavNav from './FavNav';
import FavEvent from './FavEvent';
// TODO: Add FavNav
// import EventCardProfile from './EventCardProfile';

import "../styles/fav.scss";

// Import data en dur pour préparer la connexion API 
// import events from '../data/eventsData';

function Fav() {
  return (
    <div className="fav">
      <FavNav/>
      {/* 
      <div className='fav-container__event'>
        {
          events.map((e) => (
            <EventCardProfile
              key={e.id}
              event={e}
            />
          ))
        }
      </div>
      */}
          <div className="fav__events">
            <FavEvent />
            <FavEvent />
            <FavEvent />
            <FavEvent />
            <FavEvent />
            <FavEvent />
          </div>
    </div>
  );
}

export default ProtectedRoute(Fav);