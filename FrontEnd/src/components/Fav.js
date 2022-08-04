import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

import ProtectedRoute from './ProtectedRoute';
import FavNav from './FavNav';
import EventCardTertiary from './EventCardTertiary';
import { getFavorites} from '../store/actions';

import "../styles/fav.scss";

function Fav() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const favorites = useSelector((state) => state.user.favorites.list) || [];
  const activeItem = useSelector((state) => state.user.favorites.activeItem);

  return (
    <div className="fav">
      <FavNav/>
      <div className="fav__events">
        { activeItem === 'Tous mes favoris'
          &&
          favorites.map((e) => (
            <EventCardTertiary
              key={e.id}
              event={e}
            />
          ))
        }
        { activeItem === 'Ce jour'
          &&
          <div className='fav__events__no-events'>
            <p className='fav__events__no-events__content'>Vous n'avez pas encore d'événements aujourd'hui</p>
            <Link to='/autour-de-moi'>
              <Button
                style={{
                  backgroundColor: '#F30067',
                  color: 'white'
                }}
              >
              Chercher des événements
              </Button>
            </Link>
          </div>
        }
        { activeItem === 'Cette semaine'
          &&
          <div className='fav__events__no-events'>
            <p className='fav__events__no-events__content'>Vous n'avez pas encore d'événements cette semaine</p>
            <Link to='/autour-de-moi'>
              <Button
              style={{
                backgroundColor: '#F30067',
                color: 'white'
              }}
              >
                Chercher des événements
              </Button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
}

export default ProtectedRoute(Fav);