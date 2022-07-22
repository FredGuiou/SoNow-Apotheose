// import FavNav from './FavNav';
import EventCardProfile from './EventCardProfile';

import "../styles/fav.scss";
import events from '../data/eventsData';

function Fav() {
  return (
    <div className="fav">
      {/* <FavNav /> */}
      {
        events.map((e) => (
          <EventCardProfile
            key={e.id}
            event={e}
          />
        ))
      }
    </div>
  );
}

export default Fav;