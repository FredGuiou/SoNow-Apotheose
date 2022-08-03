import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Form, Menu } from 'semantic-ui-react';

import { getUsers, getFollowed, getFollowers } from '../store/actions';
import { findUser, isFollower } from '../selectors/users';

import {
  changeUsersSearchInput,
  changeFriendsActiveItem,
  submitUsersSearch
} from '../store/actions';

import "../styles/friendsList.scss";
import UserAvatar from './UserAvatar';

function FriendsList() {

  console.log('friendlist');

  const dispatch = useDispatch();
  
  const {
    friendsactiveItem, 
    hasSearchError,
    isSearchLoading, 
    searchInput, 
    searchResults, 
  } = useSelector((state) => state.users);  

  const usersList = useSelector((state) => state.users.list) || [];
  const followers = useSelector((state) => state.user.followers.list) || [];
  const followed = useSelector((state) => state.user.followed.list) || [];

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getFollowers());
    dispatch(getFollowed());
  }, [dispatch]);

  return (
    <div className="friends">
        <Menu className='friends__menu' inverted pointing secondary>
          <Menu.Item
            name='Trouver des contacts'
            active={friendsactiveItem === 'Trouver des contacts'}
            onClick={()=> dispatch(changeFriendsActiveItem('Trouver des contacts'))}
          />
          <Menu.Item
            name='Abonnes'
            active={friendsactiveItem === 'Abonnes'}
            onClick={()=> {
              
              dispatch(changeFriendsActiveItem('Abonnes'));
            }}
          />
          <Menu.Item
            name='Abonnements'
            active={friendsactiveItem === 'Abonnements'}
            onClick={()=> {
              
              dispatch(changeFriendsActiveItem('Abonnements')); 
            }}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Form>
                <Form.Input 
                  className='friends__menu__form'
                  loading={isSearchLoading}
                  icon={{ name: 'users', link: true}}
                  placeholder='Rechercher...'
                  value={searchInput}
                  onClick={dispatch(changeFriendsActiveItem('Trouver des contacts'))}
                  onChange={(e)=> {
                    dispatch(changeUsersSearchInput(e.target.value));
                    dispatch(submitUsersSearch());
                  }}
                />
              </Form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className='friends__list'>
          {
            searchResults.length > 0
            &&
            searchResults.map((u) => (
              <UserAvatar 
                key={u.id}
                user={u} 
                friendStatus={isFollower(followed, u.id)}
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
            friendsactiveItem === 'Trouver des contacts' 
            && 
            !hasSearchError
            &&
            usersList.map((u) => (
              <UserAvatar 
                key={u.id}
                user={u} 
                friendStatus={isFollower(followed, u.id)}
              />
            ))   
          }
          {
            friendsactiveItem === 'Abonnes' 
            && 
            !hasSearchError
            &&
            followers.map((u) => (
              <UserAvatar 
                key={u.id}
                user={findUser(usersList, u.id_followed)}
                friendStatus={isFollower(followed, u.id)}
              />
            ))  
          }
          {
            friendsactiveItem === 'Abonnements' 
            &&
            !hasSearchError
            &&
            followed.map((u) => (
              <UserAvatar 
                key={u.id}
                user={findUser(usersList, u.id_followed)}
                friendStatus={isFollower(followed, u.id)}
              />
            ))  
          }
        </div>
    </div>
  );
}

export default FriendsList;