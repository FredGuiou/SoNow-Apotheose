import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Form, Menu } from 'semantic-ui-react';

import {
  getFollowed, 
  getFollowers,
  getUsers, 
  changeUsersSearchInput,
  changeFriendsActiveItem,
  submitUsersSearch
} from '../store/actions';
import { findUser, isFollower } from '../selectors/users';

import "../styles/friendsList.scss";
import UserAvatar from './UserAvatar';

function FriendsList() {

  const dispatch = useDispatch();
  
  const {
    isSearchLoading, 
    searchInput, 
    searchResults,
    hasSearchError
  } = useSelector((state) => state.users);  

  const users = useSelector((state) => state.users.list) || [];
  const followed = useSelector((state) => state.user.followed.list) || [];
  const followers = useSelector((state) => state.user.followers.list) || [];
  const activeItem = useSelector((state) => state.user.friends.activeItem);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getFollowed());
    dispatch(getFollowers());
  }, [dispatch]);

  return (
    <div className="friends">
      <Menu className='friends__menu' inverted pointing secondary>
          <div className='friends__menu__main'>
          <Menu.Item
            className='friends__menu__item'
            name='Trouver des contacts'
            active={activeItem === 'Trouver des contacts'}
            onClick={()=> dispatch(changeFriendsActiveItem('Trouver des contacts'))}
          />
          <Menu.Item
          className='friends__menu__item'
            name='Abonnes'
            active={activeItem === 'Abonnes'}
            onClick={()=> {
              dispatch(changeFriendsActiveItem('Abonnes'));
            }}
          />
          <Menu.Item
            className='friends__menu__item'
            name='Abonnements'
            active={activeItem === 'Abonnements'}
            onClick={()=> {
              dispatch(changeFriendsActiveItem('Abonnements')); 
            }}
          />
          </div>
        </Menu>
        <Form className='friends__form'>
          <Form.Input
            style={{marginTop: '1rem'}}
            loading={isSearchLoading}
            icon={{ name: 'users', link: true}}
            placeholder='Rechercher...'
            value={searchInput}
            onChange={(e)=> {
              dispatch(changeUsersSearchInput(e.target.value)); 
              dispatch(submitUsersSearch());
              dispatch(changeFriendsActiveItem('Trouver des contacts'))
            }}
          />
        </Form>
        <div className='friends__list'>
          {
            searchResults.length > 0
            &&
            searchResults.map((u) => (
              <UserAvatar 
                key={u.id}
                user={u} 
                params={'friends'}
                isFollower={isFollower(followed, u.id)}
              />
            ))   
          }
          { 
            hasSearchError && 
            <p>
              Aucun utilisateur pour "{searchInput}"
            </p>
          }
          {
            activeItem === 'Trouver des contacts' 
            && 
            !hasSearchError
            &&
            users.map((u) => (
              <UserAvatar 
                key={u.id}
                user={u} 
                isFollower={isFollower(followed, u.id)}
              />
            ))   
          }
          {
            activeItem === 'Abonnes' 
            && 
            !hasSearchError
            &&
            followers.map((u) => (
              <UserAvatar 
                key={u.id}
                user={findUser(users, u.id_followed)}
                isFollower={isFollower(followed, u.id)}
              />
            ))  
          }
          {
            activeItem === 'Abonnements' 
            &&
            !hasSearchError
            &&
            followed.map((u) => (
              <UserAvatar 
                key={u.id}
                user={findUser(users, u.id_followed)}
                isFollower={isFollower(followed, u.id)}
              />
            ))  
          }
        </div>
      </div>
  );
}

export default FriendsList;