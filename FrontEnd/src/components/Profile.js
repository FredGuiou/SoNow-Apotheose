import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../store/actions';

import ProtectedRoute from './ProtectedRoute';
import EventCardProfile from './EventCardProfile';
import UserCard from './UserCard';
import "../styles/profile.scss";

// Import data en dur pour préparer la connexion API 
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
      <UserCard 
        user={user}
      />
      <div className='profile-container__event'>
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

export default ProtectedRoute(Profile);