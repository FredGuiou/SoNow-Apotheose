import FavNav from './FavNav';
import EventCardProfile from './EventCardProfile';

import "../styles/fav.scss";

function Fav() {
  return (
    <div className="fav">
      <FavNav />
      <EventCardProfile />
    </div>
  );
}

export default Fav;