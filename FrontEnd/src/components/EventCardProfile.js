import { Card, Icon, Label } from 'semantic-ui-react';

import "../styles/eventcardprofile.scss"

function EventCardProfile({ event }) {
  return (
    <div className="event-card-profile">
      <img
        style={{borderBottom: "2px solid #ffffff"}}
        className="event-card-profile__img"
        src={event.media}
        alt={event.title}
      />
      <section className='event-card-profile__details'>
        <section className="event-card-profile__details__social-icons">
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
        <section className="event-card-profile__details__card">
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
          <section className="event-card-profile__details__card__participants">
            <Icon 
              name='user' 
              style={{
                color:'white'
              }} 
            />
            <p className="event-card-profile__details__card__participants__content" >
              {event.participants} participants
            </p>
          </section>
          <section className="event-card-profile__details__card__date">
            <div className="event-card-profile__details__card__date__day"><div>{event.start.getDate()}</div></div>
            <div className="event-card-profile__details__card__date__month"><div>{event.start.toLocaleString('fr-fr', { month: 'short' }).toUpperCase().replace('.', '')}</div></div>
          </section>
        </section>
      </section>
    </div>
  );

}

export default EventCardProfile