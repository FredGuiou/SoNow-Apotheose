import { Button, Image } from 'semantic-ui-react';

import "../styles/userAvatar.scss"; 

function UserAvatar({user, isFollower, params}) {
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
        params === 'friends' &&
      <Button
        content={!isFollower ? 'Voir le profil' : 'Ajouter'}
        className='user-avatar__btn' 
        class='ui button'
        size='large'
        style={{
          backgroundColor: '#818181',
          color: 'white',
        }}
      />
      }
    </div>
  );
}

export default UserAvatar;