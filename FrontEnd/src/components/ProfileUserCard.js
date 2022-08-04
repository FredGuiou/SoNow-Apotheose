import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Image, Menu } from 'semantic-ui-react';

import { changeProfilActiveItem, logout } from '../store/actions';
import "../styles/profileUserCard.scss";

function ProfileUserCard({ user, nbFollowed, nbFollowers }) {

  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {

  }, [dispatch]);

  const activeItem = useSelector((state) => state.user.profil.activeItem);
  // const nbOfAttendingEvents = (useSelector((state) => state.user.attending.list) || []).length;

  return (
    <header
      className='user-card'
      attached='top' 
      style={{
        backgroundColor: 'black', 
        border: 'none',
        display: 'flex',
        flexDirection: 'column'
      }}
    >  
      <div className='user-card__main'>
        <div className='user-card__main__avatar'>
          <p className='user-card__main__avatar__name'>{user.nickname}</p>
          <Image 
            avatar
            src={user.profile_picture} 
            alt={user.nickname} 
            style={{
              height: '10vh',
              width: '10vh'
            }}
          />
        </div>
        <section className='user-card__main__counters'>
          {/*
          <div className='user-card__main__counters__item'>
            <p>{nbOfAttendingEvents}</p>
            <p>Evènements</p>
          </div>
          */}
          <div className='user-card__main__counters__item'>
            <p>{nbFollowed}</p>
            <p className='user-card__main__counters__item__content'>Abonnements</p>
          </div>
          <div className='user-card__main__counters__item'>
            <p>{nbFollowers}</p>
            <p className='user-card__main__counters__item__content'>Abonnés</p>
          </div>
        </section>
        <section className='user-card__main__icons'>
          <Link to='#'>  
            <Icon 
              circular 
              name='setting'
              style={{ color: 'white'}}
            />
          </Link>
          <Link to='/'>  
            <Icon 
              circular 
              name='log out' 
              style={{ color: 'white'}} 
              onClick={()=>dispatch(logout())}
            />
          </Link>
        </section>
      </div>
      <Menu 
        className='user-card__menu' 
        inverted 
        pointing 
        secondary
        style={{
          border: 'none',
          margin: '0 auto',
        }}
      >
        <Menu.Item
          className='user-card__menu__item' 
          name='Mes événements'
          active={activeItem === 'Mes événements'}
          icon={{ name:'checked calendar', link: true}}
          onClick={()=> dispatch(changeProfilActiveItem('Mes événements'))}
        />
        <Menu.Item
          className='user-card__menu__item' 
          name='Ajouter un événement'
          active={activeItem === 'Ajouter un événement'}
          icon={{ name:'add', link: true}}
          onClick={()=> dispatch(changeProfilActiveItem('Ajouter un événement'))}
        />
        <Menu.Item
          className='user-card__menu__item' 
          name='Trouver des contacts'
          active={activeItem === 'Trouver des contacts'}
          icon={{ name:'user plus', link: true}}
          onClick={()=> {
            dispatch(changeProfilActiveItem('Trouver des contacts'));
            navigate('/mon-compte/amis');
          }}
        />
      </Menu>
    </header>
  )
};

export default ProfileUserCard;