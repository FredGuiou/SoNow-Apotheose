import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Card, Icon } from 'semantic-ui-react';

import DateCard from './DateCard';

import "../styles/eventCardMain.scss";
import { changeIconsStatus, getEvents } from '../store/actions';
import { findEventBySlug } from '../selectors/events';

function EventCardMain() {

  const dispatch = useDispatch();
  
  const { iconParticipate: participate, iconFavorite: favorite }  = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const { slug } = useParams();

  const event = useSelector((state) => findEventBySlug(state.events.list, slug));
  
  return (
    
      
    <div className="event-card">
        <div className='description-container'>
          { event &&
          <div className="event-description">
              <img
                className="event-description__img"
                src={event.media}
                alt={event.title}
              />
            <section className='event-description__details'>
            <section className='event-description__details__social-icons'>
              <Icon
                className={participate ? 'participate-is-liked' : 'participate-is-disliked'}
                name='check square' 
                size='large'
                style={{ 
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(changeIconsStatus('iconParticipate'))}
              />            
              <Icon 
                className={favorite ? 'favorite-is-liked' : 'favorite-is-disliked'}
                name='heart' 
                size='large'
                style={{ 
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(changeIconsStatus('iconFavorite'))}
              />
          </section>
              <section className="event-description__details__card">
                <Card 
                  fluid
                  style={{
                    height: '8.5rem',
                    boxShadow: 'none',
                    background: 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Card.Header
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: 'white',
                      paddingBottom: '0.6rem'
                    }}
                  >
                    {event.title}
                  </Card.Header>
                  <Card.Header
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      color: 'white',
                      paddingBottom: '0.6rem'
                    }}
                  >
                    {event.code_user_manager}
              </Card.Header>
                  <Card.Meta
                    style={{
                      color: 'white',
                    }}
                  >
                  </Card.Meta>
                  <Card.Description
                    style={{
                      color: 'white',
                      paddingBottom: '0.6rem',
                      fontSize: '0.8rem'
                    }}
                  >
                    {event.description}
                  </Card.Description>
                </Card>
                <section className="event-description__details__card__participants">
                  <Icon 
                    name='user' 
                    style={{
                      color:'white'
                    }} 
                  />
                    { event.user_pin.length > 1 &&
                    <p className='event-card-secondary__details__card__participants__content' >
                      {event.user_pin.length} participants
                    </p>
                    }
                    { event.user_pin.length === 1 &&
                    <p className='event-card-secondary__details__card__participants__content' >
                      {event.user_pin.length} participant
                    </p>
                    }
                    { event.user_pin.length === 0 &&
                    <p className='event-card-secondary__details__card__participants__content' >
                      Soyez le premier participant ! 
                    </p>
                    }
                </section>
                <section className="event-description__details__card__date">
                <DateCard 
                  start={event.start}
                />
                </section>
              </section>
            </section>
        </div>
        }
      </div>
    </div>
  );
}

export default EventCardMain;