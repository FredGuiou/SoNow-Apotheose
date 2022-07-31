import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Form, Menu } from 'semantic-ui-react';

import { getUsers } from '../store/actions';
// import users from '../data/usersData';

import {
  changeUsersSearchInput,
  changeFriendsActiveItem,
  submitUsersSearch
} from '../store/actions';

import "../styles/friendsList.scss";
import UserAvatar from './UserAvatar';

function FriendsList() {

  const dispatch = useDispatch();
  
  const {
    activeItem, 
    isSearchLoading, 
    searchInput, 
  } = useSelector((state) => state.users);  

  const list = useSelector((state) => state.users.list) || [];

  // to get events on page refresh
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="friends">
        <Menu className='friends__menu' inverted pointing secondary>
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
                  inverted
                  transparent
                  loading={isSearchLoading}
                  style={{ 
                    color: '#E0E0E0',
                  }}
                  icon={{ name: 'users', link: true}}
                  placeholder='Rechercher'
                  value={searchInput}
                  onChange={(e)=> dispatch(changeUsersSearchInput(e.target.value))}
                />
              </Form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className='friends__list'>
          {
            list.map((u) => (
              <UserAvatar user={u} />
            ))
          }
        </div>
    </div>
  );
}

export default FriendsList;