import { Link } from "react-router-dom";
import { Card, Icon, Label } from 'semantic-ui-react';

import "../styles/feedEvent.scss"; 

function FeedEvent({ event }) {
  return (
    <Link to={`/event/${event.id}`}>
      <div className="feed-event">
        <img
          className="feed-event__img"
          src={event.media}
          alt={event.title}
        />
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
        <div
          style={{
            objectFit: 'cover',
            height: '70%',
            width: '100%',
            position: 'relative'
          }}
        >
                  <Label className="feed-event__date">
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
          <div
          className="feed-event__icons"
          >
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
          </div>
        </div>
        <Card.Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '20%',
          }}
          href={`/event/${event.id}`}
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
        </Card.Content>
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
        <Card.Content
            style={{
              border: 'none',
              display:'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '10%',
            }}
        >
          <section
            style={{
              display: 'flex'
            }}
          >
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
        </Card.Content>
      </Card>
    </div>
    </Link>
  );
}

export default FeedEvent;