import { Button, Image } from 'semantic-ui-react';

import profile from '../images/profile.jpg'
import "../styles/userAvatar.scss"; 

function UserAvatar({user, friendStatus}) {
  return (
    <div className="user-avatar">
      {/* src de l'image à dynamiser */}
      <Image src={profile} alt={user.nickname} avatar
        style={{
          height: '10vh',
          width: '10vh'
        }}
      />
      <p>{user.nickname}</p>
      <Button
        content={friendStatus ? 'Voir le profil' : "S'abonner"}
        className='user-avatar__btn' 
        class='ui button'
        size='large'
        style={{
          backgroundColor: '#818181',
          color: 'white',
        }}
      />
    </div>
  );
}

export default UserAvatar;