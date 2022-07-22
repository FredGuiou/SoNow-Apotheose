import EventCardProfile from './EventCardProfile';
import UserCard from './UserCard';

import "../styles/profile.scss";
import events from '../data/eventsData';

function Profile() {
  return (
    <div className="profile">
      <UserCard />
      {
        events.map((e) => (
          <EventCardProfile
            key={e.id}
            event={e}
          />
        ))
      }
    </div>
  );
}

export default Profile;