import FavNav from './FavNav';
import EventCardsProfile from './EventCardsProfile';

import "../styles/fav.scss";

function Fav() {
  return (
    <div className="fav">
      <FavNav />
      <EventCardsProfile />
    </div>
  );
}

export default Fav;