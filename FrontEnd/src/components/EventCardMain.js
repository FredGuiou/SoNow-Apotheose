import { Card, Icon, Label } from 'semantic-ui-react';

import DateCard from './DateCard';

import "../styles/eventCardMain.scss";

import events from '../data/eventsData';

function EventCardMain() {

  const event = events.find((e) => e.slug === 'pool-party');
  
  return (
    <div className="event-card">
        <div className='description-container' key={event.id}>
          <div className="event-description">
              <img
                className="event-description__img"
                src={event.media}
                alt={event.title}
              />
            <section className='event-description__details'>
            <section className='event-description__details__social-icons'>
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
                    Jean-Michel
                    {/* {event.code_user_manager} */}
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
                  <Card.Content>
                    {
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
                    }
                  </Card.Content>
                </Card>
                <section className="event-description__details__card__participants">
                  <Icon 
                    name='user' 
                    style={{
                      color:'white'
                    }} 
                  />
                  <p className="event-description__details__card__participants__content" >
                    {event.user_attend_event.length} participants
                  </p>
                </section>
                <section className="event-description__details__card__date">
                <DateCard 
                  start={event.start}
                />
                </section>
              </section>
            </section>
        </div>
      </div>
    </div>
  );
}

export default EventCardMain;