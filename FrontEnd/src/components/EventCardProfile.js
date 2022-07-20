/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import event from '../images/event.jpg'
import EventCardInformations from './EventCardInformations'

const EventCardProfile = () => (
  <div class="ui column stackable aligned page grid">
  <Grid columns={2} >

    <Grid.Column>
      <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src={event}
      />
    }
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={<EventCardInformations />}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
    <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src={event}
      />
    }
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={<EventCardInformations />}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
    <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src={event}
      />
    }
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={<EventCardInformations />}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
    <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src={event}
      />
    }
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={<EventCardInformations />}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
    <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src={event}
      />
    }
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={<EventCardInformations />}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
    <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src={event}
      />
    }
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={<EventCardInformations />}
     fluid
     color='pink'
      />
    </Grid.Column>

  </Grid>
  </div>
)

export default EventCardProfile