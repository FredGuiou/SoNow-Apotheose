import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { changeFavoritesActiveItem } from '../store/actions';
import "../styles/favnav.scss";

function FavNav() {

  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.favorites.activeItem);
  
  return (
    <div className="fav">
      <Menu className='fav__menu' inverted pointing secondary
        style={{
          backgroundColor: 'black'
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
          name="Aujourd'hui"
          active={activeItem === "Aujourd'hui"}
          onClick={()=> dispatch(changeFavoritesActiveItem("Aujourd'hui"))}
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