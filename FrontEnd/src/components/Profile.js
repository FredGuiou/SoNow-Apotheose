import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEventsAttending, getUser } from '../store/actions';

import ProtectedRoute from './ProtectedRoute';
import EventCardTertiary from './EventCardTertiary';
import ProfileUserCard from './ProfileUserCard';
import "../styles/profile.scss";

function Profile() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
    dispatch(getEventsAttending())
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  const events = useSelector((state) => state.user.attending.list) || []; 

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