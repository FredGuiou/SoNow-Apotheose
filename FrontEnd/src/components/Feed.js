import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEvents } from '../store/actions';
import { shuffle } from '../selectors/events';

import ProtectedRoute from './ProtectedRoute';
import EventCardSecondary from './EventCardSecondary';
import "../styles/feed.scss";



function Feed() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = shuffle(useSelector((state) => state.events.list)) || [];

  return (
    <div className="feed-container">
      <div className='feed-container__event'>
        {
          events.map((e) => (
            <EventCardSecondary
              key={e.id}
              event={e}
              params={'feed'}
            />
          ))
        }
      </div>
    </div>
  );
}
  
  export default ProtectedRoute(Feed);