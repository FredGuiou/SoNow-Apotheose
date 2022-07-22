import { Card, Container, Icon, Image, Label } from 'semantic-ui-react';

import "../styles/feedEvent.scss"; 

function FeedEvent({ event }) {
  return (
  <Card fluid
    style={{
      borderRadius: '300px',
      boxShadow: 'none',
      background: 'black',
      height: '100%'
    }}
  >
    <img
      src={event.media}
      style={{
        objectFit: 'cover',
        height: '70%',
      }}
      alt={event.title}
    />
    <Card.Content
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '20%',
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
            >
        <Image src='https://react.semantic-ui.com/images/avatar/small/ade.jpg' />
        {t.name}
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
      <div
      style={{
        display: 'flex',
        flexDirection: 'space-between'
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
    <Container fluid
    style={{
display: 'flex',
justifyContent:'flex-end'
    }}
    >
        <Icon name='user' />
        <p
        style={{
          color: 'white'
        }}
      >
        {event.participants} participants
      </p>
    </Container>
    </Card.Content>
  </Card>
  );
}

export default FeedEvent;