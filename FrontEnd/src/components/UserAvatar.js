import { Button, Image } from 'semantic-ui-react';

import profile from '../images/profile.jpg'
import "../styles/userAvatar.scss"; 

function UserAvatar({user, isFollower }) {
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
      {/* Nombre d'amis à dynamiser 
      <p>12 amis en communs</p>
      */}
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
    </div>
  );
}

export default UserAvatar;