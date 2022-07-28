import { Button, Image } from 'semantic-ui-react';

import profile from '../images/profile.jpg'
import "../styles/userAvatar.scss"; 

function UserAvatar({user}) {
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
      {/* Nombre d'amis à dynamiser */}
      <p>12 amis en communs</p>
      {/* Texte à dynamiser */}
      <Button
        content='Voir le profil'
        className='user-avatar__btn' 
        class='ui button'
        size='large'
        style={{
          backgroundColor: '#F30067',
          color: 'white',
        }}
      />
    </div>
  );
}

export default UserAvatar;