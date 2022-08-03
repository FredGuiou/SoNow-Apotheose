import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Form, Menu } from 'semantic-ui-react';

import { getFollowed, getFollowers, getUsers } from '../store/actions';
// import users from '../data/usersData';

import {
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
    searchResults
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
          <Menu.Item
            name='Trouver un contact'
            active={activeItem === 'Trouver un contact'}
            onClick={()=> dispatch(changeFriendsActiveItem('Trouver un contact'))}
          />
          <Menu.Item
            name='Abonnes'
            active={activeItem === 'Abonnes'}
            onClick={()=> dispatch(changeFriendsActiveItem('Abonnes'))}
          />
          <Menu.Item
            name='Abonnements'
            active={activeItem === 'Abonnements'}
            onClick={()=> dispatch(changeFriendsActiveItem('Abonnements'))}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Form onSubmit={(e)=> dispatch(submitUsersSearch())}>
                <Form.Input 
                  className='friends__menu__form'
                  loading={isSearchLoading}
                  icon={{ name: 'users', link: true}}
                  placeholder='Rechercher...'
                  value={searchInput}
                  onChange={(e)=> dispatch(changeUsersSearchInput(e.target.value))}
                />
              </Form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className='friends__list'>
          { 
            activeItem === 'Trouver un contact' 
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
            followers.map((u) => (
              <UserAvatar 
                key={u.id}
                user={u}
                isFollower={isFollower(followed, u.id)} 
              />
            ))   
          }
          { 
            activeItem === 'Abonnements' 
            &&
            followed.map((u) => (
              <UserAvatar 
                key={u.id}
                user={u}
                isFollower={isFollower(followed, u.id)} 
              />
            ))   
          }
            
        </div>
    </div>
  );
}

export default FriendsList;