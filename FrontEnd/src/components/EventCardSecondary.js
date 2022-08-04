import { Link } from 'react-router-dom';
import { Card, Icon, Label } from 'semantic-ui-react';

import DateCard from './DateCard';

import '../styles/eventCardSecondary.scss'; 

function EventCardSecondary({ event, params }) {

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
              <Icon 
                name='check square' 
                size='large'
                style={{ 
                  color: '#E0E0E0',
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
              />            
              <Icon 
                name='heart' 
                size='large'
                style={{ 
                  color: '#E0E0E0',
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
              />
              <Icon 
                name='comment' 
                size='large'
                style={{ 
                  color: '#E0E0E0',
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
                />
              <Icon 
                name='share' 
                size='large'
                style={{ 
                  color: '#E0E0E0',
                  marginTop: '0.6em',
                  cursor: 'pointer',
                }}
                />
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
              
                {/*
                  event.tag.map((t) => {
                    return (
                      <Label 
                      key={t.id}
                      //remove white spaces to use category name as slug
                      href={`/categorie/${t.name.replace(' ', '')}`}
                      >
                        {t.emoji} {t.name}
                      </Label>
                    )
                  })
                */}
                <Label 
                  key={1}
                  >
                    👯  Entre amis
                </Label>
                <Label 
                  key={2}
                  >
                    🕺  Danse
                </Label>
                <Label 
                  key={3}
                  >
                    🎶  Musique
                </Label>
              </Card.Content>
            </Card>
            <section className='event-card-secondary__details__card__participants'>
              <Icon 
                name='user' 
                style={{
                  color:'white'
                }} 
              />
              <p className='event-card-secondary__details__card__participants__content' >
                {/* event.user_attend_event.length*/} 412 participants
              </p>
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