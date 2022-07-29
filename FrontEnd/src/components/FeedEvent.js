import { Link } from 'react-router-dom';
import { Card, Icon, Label } from 'semantic-ui-react';

import '../styles/feedEvent.scss'; 

function FeedEvent({ event }) {
  return (
    <Link to={`/event/${event.slug}`}>
      <div className='feed-event'>
        {/* En attente envoie du lien des images*/}
        <img
          className='feed-event__img'
          src={'https://picsum.photos/1080'}
          alt={event.title}
        />
        <section className='feed-event__details'>
          <section className='feed-event__details__social-icons'>
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
          <section className='feed-event__details__card'>
            <Card 
              fluid
              style={{
                height: '5.6rem',
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
              <Card.Content
                style={{
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0px',
                }}
              >
                {/* En attente ajout des tags à l'envoie des évènements */}
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
            <section className='feed-event__details__card__participants'>
              <Icon 
                name='user' 
                style={{
                  color:'white'
                }} 
              />
              <p className='feed-event__details__card__participants__content' >
                {/* event.user_attend_event.length*/} 412 participants
              </p>
            </section>
            <section className='feed-event__details__card__date'>
              {/* En attente envoie date au bon format */}
              <div className='feed-event__details__card__date__day'>{new Date(event.start.replace('T', ' ')).getUTCDay() + 1}</div>
              <div className='feed-event__details__card__date__month'><div>{new Date(event.start.replace('T', ' ')).toLocaleString('fr-fr', { month: 'short' }).toUpperCase().replace('.', '')}</div></div>  
            </section>
          </section>
        </section>
      </div>
    </Link>
  );
}

export default FeedEvent;