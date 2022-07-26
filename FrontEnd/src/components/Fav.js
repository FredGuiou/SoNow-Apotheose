// import FavNav from './FavNav';
// TODO: Add FavNav
import EventCardProfile from './EventCardProfile';

import "../styles/fav.scss";

// Import data en dur pour préparer la connexion API 
import events from '../data/eventsData';

function Fav() {
  return (
    <div className="fav-container">
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
    </div>
  );
}

export default Fav;