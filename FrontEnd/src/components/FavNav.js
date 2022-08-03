import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { changeFavoritesActiveItem } from '../store/actions';
import "../styles/favnav.scss";

function FavNav() {

  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.user.favorites.activeItem);
  
  return (
    <div className="fav-nav">
      <Menu className='fav-nav__menu' inverted pointing secondary
        style={{
          backgroundColor: 'black',
          height: '6vh',
        }}
      >
        <Menu.Item
          name='Tous mes favoris'
          active={activeItem === 'Tous mes favoris'}
          onClick={()=> {
            dispatch(changeFavoritesActiveItem('Tous mes favoris'));
          }}
        />
        <Menu.Item
          name='Ce jour'
          active={activeItem === 'Ce jour'}
          onClick={()=> dispatch(changeFavoritesActiveItem('Ce jour'))}
        />
        <Menu.Item
          name='Cette semaine'
          active={activeItem === 'Cette semaine'}
          onClick={()=> dispatch(changeFavoritesActiveItem('Cette semaine'))}
        />
      </Menu>
    </div>
  );
}

export default FavNav;