import { Card, Icon, Label } from 'semantic-ui-react';

import "../styles/feedEvent.scss"; 

function FeedEvent({ event }) {
  return (
    <div className="feed-event">
      <img
        className="feed-event__img"
        src={event.media}
        alt={event.title}
      />
      <section className="feed-event__date">
          <Label>
            <p
              style={{
                paddingTop: '0.5833em',
              }}
            >
                {event.start.getDate()} 
            </p>
            <p
              style={{
                paddingBottom: '0.5833em',
              }}
            >
              {event.start.toLocaleString('fr-fr', { month: 'long' })}
            </p>
          </Label>
      </section>
      <section className='feed-event__details'>
        <section className="feed-event__details__participants">
          <Icon 
            name='user' 
            style={{
              color:'white'
            }} 
          />
          <p
          style={{
            color: 'white',
          }}
          >
            {event.participants} participants
          </p>
        </section>
        <section className="feed-event__details__social-icons">
            <Icon 
              name='favorite' 
              size='large' 
              circular
              style={{ 
                backgroundColor: 'black',
                color: 'white',
                marginTop: '0.6em',
                cursor: 'pointer'
              }}
            />
            <Icon 
              name='comment' 
              size='large' 
              circular
              style={{ 
                backgroundColor: 'black',
                color: 'white',
                marginTop: '0.6em',
                cursor: 'pointer'
              }}
              />
            <Icon 
              name='share' 
              size='large' 
              circular
              style={{ 
                backgroundColor: 'black',
                color: 'white',
                marginTop: '0.6em',
                cursor: 'pointer'
              }}
              />
        </section>
        <section className="feed-event__details__card">
          <Card 
            fluid
            style={{
              boxShadow: 'none',
              background: 'black',
              display: 'absolute', 
              bottom: '0px',
              left: '0px'
            }}
          >
            <Card.Header
              style={{
                color: 'white'
              }}
            >
              {event.title}
            </Card.Header>
            <Card.Meta
              style={{
                color: 'white'
              }}
            >
              <span className='date'>
                {event.code_user_manager.nickname}
              </span>
            </Card.Meta>
            <Card.Description
              style={{
                color: 'white'
              }}
            >
              {event.metadescription}
            </Card.Description>
            <Card.Content
              style={{
                border: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {
                event.tag.map((t) => {
                  return (
                    <Label 
                    key={t.id}
                    as='a' 
                    image
                    //remove white spaces to use category name as slug
                    href={`/categorie/${t.name.replace(' ', '')}`}
                    style={{
                      color: 'white',
                      background: t.color,
                    }}
                    >
                      {t.emoji} {t.name}
                    </Label>
                  )
                })
              }
            </Card.Content>
          </Card>
        </section>
      </section>
    </div>
  );
}

export default FeedEvent;