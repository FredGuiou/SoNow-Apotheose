import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Header, Icon, Image, Menu } from 'semantic-ui-react';

import { changeProfilActiveItem, logout } from '../store/actions';
import profile from '../images/profile.jpg'
import "../styles/userCard.scss"

function UserCard() {

  const dispatch = useDispatch();
  const navigate= useNavigate();

  const activeItem = useSelector((state) => state.profil.activeItem);
  const user = useSelector((state) => state.user);
  
  return (
  <Header attached='top' style={{backgroundColor: 'black', border: 'none'}}>  
    <Grid
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Grid.Column 
        width={3}
      >
        <div style={{margin: '0.5em'}}>
          <p className='profile-counter__name'>{user.nickname}</p>
          <Image circular src={profile} size='tiny'/>
        </div>
      </Grid.Column>
      <Grid.Column
      width={8}
      style={{
        color:'white',
        display: 'flex',
      }}
      >
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0.5em'
          }}
        >
          {/* En attente du back */}
          <p className='profile-counter__content'>562</p>
          <p className='profile-counter__title'>Evènements</p>
        </Container>
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0.5em'
          }} 
        >
          {/* En attente du back */}
          <p className='profile-counter__content'>1364</p>
          <p className='profile-counter__title'>Abonnements</p>
        </Container>
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0.5em'
          }} 
        >
          {/* En attente du back */}
          <p className='profile-counter__content'>698</p>
          <p className='profile-counter__title'>Abonnés</p>
        </Container>
        </Grid.Column>
        <Grid.Column
        width={3}
        >
          <Link to='#'>  
            <Icon circular name='setting' size='large' style={{ color: 'white', margin: '0.5em'}} />
          </Link>
          <Link to='/'>  
            <Icon 
              circular name='log out' 
              size='large' 
              style={{ color: 'white', margin: '0.5em'}} 
              onClick={()=>dispatch(logout())}
            />
          </Link>
      </Grid.Column>
    </Grid>
    <Header.Subheader
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'white',
        marginBottom: '0.5em',
      }}
    >
      <Menu className='friends__menu' inverted pointing secondary>
        <Menu.Item
          name='Mes événements'
          active={activeItem === 'Mes événements'}
          icon={{ name:'checked calendar', link: true}}
          onClick={()=> dispatch(changeProfilActiveItem('Mes événements'))}
        />
        <Menu.Item
          name='Ajouter un événement'
          active={activeItem === 'Ajouter un événement'}
          icon={{ name:'add', link: true}}
          onClick={()=> dispatch(changeProfilActiveItem('Ajouter un événement'))}
        />
        <Menu.Item
          name='Trouver des contacts'
          active={activeItem === 'Trouver des contacts'}
          icon={{ name:'user plus', link: true}}
          onClick={()=> {
            dispatch(changeProfilActiveItem('Trouver des contacts'));
            navigate('/mon-compte/amis');
          }}
        />
      </Menu>
    </Header.Subheader>
  </Header>
  )
};

export default UserCard;