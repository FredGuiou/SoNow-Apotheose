<Card fluid
image='https://picsum.photos/1080'
header='Elliot Baker'
meta='Friend'
description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
extra={extra}
style={{
  flex: '1',
}}
/>



<div>
<Icon.Group
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Icon name='star' size='large'/>
        <Icon name='comment' size='large'/>
        <Icon name='share' size='large'/>
      </Icon.Group>
  <Card fluid
  style={{
    width: '100vw',
  }}
  >
    <Image src='https://picsum.photos/1080' 
      style={{
        width: '100vw',
        height: '66vh',
        objectFit: 'cover',
      }}
    />
    <Card.Content
      style={{
        height: '13vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100vw'
      }}
    >
      <Card.Header>Pool Party</Card.Header>
      <Card.Meta>
        <span className='date'>SoNow Event</span>
      </Card.Meta>
      <Card.Description>
        Crazy evening around the Duplex pool
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
      <Label as='a' image
      >
        <Image src='https://react.semantic-ui.com/images/avatar/small/ade.jpg' />
        Amis
      </Label>
      <Label as='a' image>
        <Image src='https://react.semantic-ui.com/images/avatar/small/zoe.jpg' />
        Danse
      </Label>
      <Label as='a' image>
        <Image src='https://react.semantic-ui.com/images/avatar/small/nan.jpg' />
        Musique
      </Label>
    </Card.Content>
    <Card.Content extra
        style={{
          height: '5vh',
          border: 'none'
        }}
    >
      <p>
        <Icon name='user' />
        22 participants
      </p>
    </Card.Content>
  </Card>
  </div>


{
  events.map((e) => (
    <FeedEvent
      key={e.id}
      event={e}
    />
  ))
}

const events = [
  {
    id: 12,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    description: 'Crazy evening around the Duplex pool',
    start: {
      day: 12, 
      month: 'Juin'
    },
    tag: [
      'Entre amis', 
      'Danse',
      'Musique',
    ],
    user: 'SoNow Event',
    participants: 22,
  },
  {
    id: 13,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    description: 'Crazy evening around the Duplex pool',
    start: {
      day: 12, 
      month: 'Juin'
    },
    tag: [
      'Entre amis', 
      'Danse',
      'Musique',
    ],
    user: 'SoNow Event',
    participants: 22,
  },
  {
    id: 14,
    title: 'Pool Party',
    media: 'https://picsum.photos/1080', 
    description: 'Crazy evening around the Duplex pool',
    start: {
      day: 12, 
      month: 'Juin'
    },
    tag: [
      'Entre amis', 
      'Danse',
      'Musique',
    ],
    user: 'SoNow Event',
    participants: 22,
  }
]
;