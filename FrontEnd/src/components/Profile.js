import EventCardProfile from './EventCardProfile';
import UserCard from './UserCard';
import "../styles/profile.scss";

// Import data en dur pour préparer la connexion API 
import events from '../data/eventsData';

function Profile() {
  return (
    <div className="profile-container">
      <UserCard />
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

export default Profile;