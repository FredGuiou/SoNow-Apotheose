import { useParams } from 'react-router-dom';
import { Card, Icon, Label } from 'semantic-ui-react';

import "../styles/eventCardDescription.scss";

import events from '../data/eventsData';

function EventCardDescription() {

  const params = useParams();
  const event = events.find((e) => e.slug === params.slug);
  
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
              <section className="event-description__details__card">
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
                    {event.description}
                  </Card.Description>
                  <Card.Content
                    style={{
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0px',
                    }}
                  >
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
                  <div className="event-description__details__card__date__day"><div>{event.start.getDate()}</div></div>
                  <div className="event-description__details__card__date__month"><div>{event.start.toLocaleString('fr-fr', { month: 'short' }).toUpperCase().replace('.', '')}</div></div>
                </section>
              </section>
            </section>
            <section className="event-description__details__card__description">
            </section>
          </div>
      </div>
    </div>
  );
}

export default EventCardDescription;