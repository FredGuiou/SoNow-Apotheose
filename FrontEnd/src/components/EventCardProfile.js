import { Link } from "react-router-dom";
import { Card, Icon, Label } from 'semantic-ui-react';

import "../styles/eventcardprofile.scss"

function EventCardProfile({ event }) {
  return (
    <Card 
    fluid
    style={{
      boxShadow: 'none',
      background: 'black',
      height: '100%',
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
      <Link to={`/event/${event.id}`}>
        <img
          src={event.media}
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%', 
            display: 'absolute', 
            top: '0px',
            bottom: '0px'
          }}
          alt={event.title}
        />
      </Link>
      <Label
        style={{
          position: 'absolute',
          bottom:'1em',
          left:'1em',
          textAlign: 'center',
          background: '#f30067',
          color: 'white',
          paddingRight: '0.833em',
          paddingLeft: '0.833em',
        }}
      >
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom:'1em',
        right:'1em',
      }}
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
  );

}

export default EventCardProfile