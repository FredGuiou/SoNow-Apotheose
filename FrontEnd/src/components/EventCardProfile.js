/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import EventCardInformations from './EventCardInformations'

const EventCardProfile = () => (
  <div class="ui column stackable aligned page grid" style={{backgroundColor: 'black'}}>
  <Grid  columns={2} >

    <Grid.Column>
      <Card
    image={
      <Image
        fluid
        label={{
          as: 'a',
          color: 'yellow',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src='https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif'
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
          color: 'yellow',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src='https://media.giphy.com/media/1xkMJIvxeKiDS/giphy.gif'
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
          color: 'yellow',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src='https://media.giphy.com/media/ThHSCmkz0CUI8/giphy.gif'
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
          color: 'yellow',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src='https://media.giphy.com/media/IG6i30q4DMT0Q/giphy.gif'
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
          color: 'yellow',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src='https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif'
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
          color: 'yellow',
          content: 'Outdoor',
          icon: 'chart area',
          ribbon: true,
        }}
        
        src='https://media.giphy.com/media/1xkMJIvxeKiDS/giphy.gif'
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