import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../store/actions';

import ProtectedRoute from './ProtectedRoute';
import EventCardTertiary from './EventCardTertiary';
import ProfileUserCard from './ProfileUserCard';
import "../styles/profile.scss";

import events from '../data/eventsData';

function Profile() {

  const dispatch = useDispatch();
  
  // to get user on page refresh
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <ProfileUserCard 
        user={user}
      />
      <div className='profile-container__event'>
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

export default ProtectedRoute(Profile);