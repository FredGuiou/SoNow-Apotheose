import { useSelector } from 'react-redux';

import ProtectedRoute from './ProtectedRoute';
import FeedEvent from './FeedEvent';
import "../styles/feed.scss";
// import events from '../data/eventsData';

function Feed() {

  const events = useSelector((state) => state.events.list);
  console.log(events);

  return (
    <div className="feed-container">
      <div className='feed-container__event'>
        {
          events.map((e) => (
            <FeedEvent
              key={e.id}
              event={e}
            />
          ))
        }
      </div>
    </div>
  );
}
  
  export default ProtectedRoute(Feed);