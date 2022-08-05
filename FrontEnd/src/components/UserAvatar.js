import { Image } from 'semantic-ui-react';

import "../styles/userAvatar.scss"; 

function UserAvatar({user, params}) {
  return (
    <div className="user-avatar">
      <Image src={user.profile_picture} alt={user.nickname} avatar
        style={{
          height: '10vh',
          width: '10vh'
        }}
      />
      <p>{user.nickname}</p>
      {
        params === 'friends'
      }
    </div>
  );
}

export default UserAvatar;