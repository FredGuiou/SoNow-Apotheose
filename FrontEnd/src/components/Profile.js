import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEventsAttending, getUser,   getFollowed, 
  getFollowers, } from '../store/actions';

import ProtectedRoute from './ProtectedRoute';
import EventCardTertiary from './EventCardTertiary';
import ProfileUserCard from './ProfileUserCard';
import "../styles/profile.scss";

function Profile() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
    dispatch(getEventsAttending())
    dispatch(getFollowed());
    dispatch(getFollowers());
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  const events = useSelector((state) => state.user.attending.list) || []; 
  const followed = useSelector((state) => state.user.followed.list) || [];
  const followers = useSelector((state) => state.user.followers.list) || [];

  return (
    <div className="profile-container">
      <ProfileUserCard 
        user={user}
        nbFollowers={followers.length}
        nbFollowed={followed.length}
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