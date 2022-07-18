import EventCardsProfile from './EventCardsProfile';
import UserCard from './UserCard';

import "../styles/profile.scss";

function Profile() {
  return (
    <div className="profile">
      <UserCard />
      <EventCardsProfile />
    </div>
  );
}

export default Profile;