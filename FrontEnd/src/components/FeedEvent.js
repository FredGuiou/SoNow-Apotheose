import { Card, Icon, Image, Label } from 'semantic-ui-react';

import "../styles/feedEvent.scss"; 

function FeedEvent({ event }) {
  return (
  <div
    style={{
      position: 'relative',
    }}
  >

    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        position: 'absolute',
        top: '35vh',
        right: '4vw',
        zIndex: 2,
      }}
      >
      <Icon 
        name='star' 
        size='large' 
        circular
        style={{ 
          backgroundColor: 'black',
          color: 'white',
          marginTop: '0.6em',
          marginBottom: '0.6em'
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
          marginBottom: '0.6em'
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
          marginBottom: '0.6em'
        }}
        />
    </div>

  <div     
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: 1
    }}>
  <Card fluid>
      <Image src={event.media}
        style={{
          height: '66vh',
          objectFit: 'cover',
          width: '100vw',
        }}
      />
    <Card.Content
      style={{
        height: '13vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Card.Header>{event.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{event.user}</span>
      </Card.Meta>
      <Card.Description>
        {event.description}
      </Card.Description>
    </Card.Content>
    <Card.Content
      style={{
        height: '8vh',
        border: 'none',
        display: 'flex',
        alignItems: 'center'
      }}
    >

        {
          event.tag.map((t) => {
            return (
            <Label 
            key={t}
            as='a' image
            >
        <Image src='https://react.semantic-ui.com/images/avatar/small/ade.jpg' />
        {t}
      </Label>
          )
          })
        }

    </Card.Content>
    <Card.Content extra
        style={{
          height: '5vh',
          border: 'none'
        }}
    >
      <p>
        <Icon name='user' />
        {event.participants} participants
      </p>
    </Card.Content>
  </Card>
  </div>
  </div>
  );
}

export default FeedEvent;