import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEvents } from '../store/actions';

import ProtectedRoute from './ProtectedRoute';
import FeedEvent from './FeedEvent';
import "../styles/feed.scss";
// import events from '../data/eventsData';

function Feed() {

  const dispatch = useDispatch();
  
  // to get events on page refresh
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  // || [] to be abble to map before loadgin the events list 
  const events = useSelector((state) => state.events.list) || [];

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