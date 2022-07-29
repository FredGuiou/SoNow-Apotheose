import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {  Menu, Icon } from 'semantic-ui-react';

import '../styles/nav.scss';

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
      <footer className='footer'>
          <Menu inverted icon fixed='bottom'  borderless widths={5}
            style= {{
              height: '8vh',
              width: '100vw'
            }}
          >
          <Menu.Item
            name='home icon'
            active={location.pathname === '/'}
            onClick={()=> {navigate('/feed')}}
          >
          <div to='/feed' className='footer__nav__link'>
            <Icon name='home' />
            <p className='footer__nav__title'>Accueil</p>
          </div>
          </Menu.Item>
          <Menu.Item
            name='favorite icon'
            active={location.pathname === '/favoris'}
            onClick={()=> navigate('/favoris')}
          >
          <div to='/favoris' className='footer__nav__link'>
            <Icon name='favorite' />
            <p className='footer__nav__title'>Favoris</p>
          </div>
          </Menu.Item>
          <Menu.Item
            name='search icon'
            active={location.pathname === '/autour-de-moi'}
            onClick={()=> navigate('/autour-de-moi')}
          >
          <div to='/autour-de-moi' className='footer__nav__link'>
            <Icon name='compass' />
            <p className='footer__nav__title'>Recherche</p>
          </div>
          </Menu.Item>
          <Menu.Item
            name='mail icon'
            active={location.pathname === '/messagerie'}
            onClick={()=> navigate('#')}
          >
          <div to='#' className='footer__nav__link'>
            <Icon name='mail' />
            <p className='footer__nav__title'>Messagerie</p>
          </div>
          </Menu.Item>
          <Menu.Item
            name='user profile icon'
            active={location.pathname === '/mon-compte'}
            onClick={()=> navigate('/mon-compte')}
          >
          <div to='/mon-compte' className='footer__nav__link'>
            <Icon name='user' />
            <p className='footer__nav__title'>Profil</p>
          </div>
          </Menu.Item>
        </Menu>
      </footer>
    )
}

export default Nav;