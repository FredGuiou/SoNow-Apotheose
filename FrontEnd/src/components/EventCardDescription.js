/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Icon, Label } from 'semantic-ui-react';

import "../styles/eventCardDescription.scss";

import eventsData from '../data/eventsData';

function EventCardDescription() {

  const event = eventsData;

  const eventsFiltered = event.filter(e => {
    return e.id === 12;
  });
  
  return (
    <div className="event-card">
      {
      eventsFiltered.map ((e) => (
        <div className='description-container' key={e.id}>
            <div className="event-description">
            <img
              style={{borderBottom: "2px solid #ffffff"}}
              className="event-description__img"
              src={e.media}
              alt={e.title}
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
                    {e.title}
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
                    {e.metadescription}
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
                      e.tag.map((t) => {
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
                    {e.participants} participants
                  </p>
                </section>
                <section className="event-description__details__card__date">
                  <div className="event-description__details__card__date__day"><div>{e.start.getDate()}</div></div>
                  <div className="event-description__details__card__date__month"><div>{e.start.toLocaleString('fr-fr', { month: 'short' }).toUpperCase().replace('.', '')}</div></div>
                </section>
              </section>
            </section>
            <section className="event-description__details__card__description">
              <Card.Description
                  style={{
                    color: 'white',
                    paddingBottom: '0.6rem',
                    fontSize: '0.9rem'
                  }}
                >
              <p className="event-description__details__card__description__content">
                {e.description}
              </p>
              </Card.Description>
            </section>
          </div>
      </div>
      ))
      }
    </div>
  );
}

export default EventCardDescription;