import ProtectedRoute from './ProtectedRoute';
import FavNav from './FavNav';
import EventCardTertiary from './EventCardTertiary';
// TODO: Add FavNav
// import ProfileEventCard from './ProfileEventCard';

import "../styles/fav.scss";

// Import data en dur pour préparer la connexion API 
import events from '../data/eventsData';

function Fav() {
  return (
    <div className="fav">
      <FavNav/>
      <div className="fav__events">
        {
          events.map((e) => (
            <EventCardTertiary
              key={e.id}
              event={e}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ProtectedRoute(Fav);