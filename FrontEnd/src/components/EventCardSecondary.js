import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Icon, Label } from 'semantic-ui-react';

import DateCard from './DateCard';

import '../styles/eventCardSecondary.scss';
import { changeIconsStatus } from '../store/actions';

function EventCardSecondary({ event, params }) {

  const dispatch = useDispatch();

  const { iconParticipate: participate, iconFavorite: favorite }  = useSelector((state) => state.user);

  return (
    <Link to={`/event/${event.slug}`}>
      <div className={params === 'autour-de-moi'? 'event-card-secondary' : 'event-card-secondary search' }>
        <img
          className={params === 'autour-de-moi'? 'event-card-secondary__img search' : 'event-card-secondary__img'}
          src={event.media}
          alt={event.title}
        />
        <section className='event-card-secondary__details'>
          <section className={params === 'autour-de-moi'? 'event-card-secondary__details__social-icons hidden' : 'event-card-secondary__details__social-icons'}>
              <Link to={'#'}>
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
              </Link>
              <Link to={'#'}>          
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
              </Link>
              <Link to={'#'}>
              <Icon
                name='comment' 
                size='large'
                style={{ 
                  color: '#E0E0E0',
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
                />
              </Link>
              <Link to={'#'}>
              <Icon 
                name='share' 
                size='large'
                style={{ 
                  color: '#E0E0E0',
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
                />
              </Link>
          </section>
          <section className='event-card-secondary__details__card'>
            <Card 
              fluid
              style={{
                height: '8.5rem',
                boxShadow: 'none',
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: '0px',
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
                {event.user_manager}
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
                {event.metadescription}
              </Card.Description>
              <Card.Content className={params === 'autour-de-moi'? 'event-card-secondary__details__card__labels hidden' : 'event-card-secondary__details__card__labels'}>
                {
                  event.tag.map((t) => {
                    return (
                      <Label 
                      key={t.id}
                      //remove white spaces to use category name as slug
                      href={`/categorie/${t.name.replace(' ', '')}`}
                      >
                        {t.name}
                      </Label>
                    )
                  })
                }
              </Card.Content>
            </Card>
            <section className='event-card-secondary__details__card__participants'>
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
            <section className='event-card-secondary__details__card__date'>
              <DateCard 
                start={event.start}
              />
            </section>
          </section>
        </section>
      </div>
    </Link>
  );
}

export default EventCardSecondary;