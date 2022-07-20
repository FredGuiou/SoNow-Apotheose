/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Grid, Image, Card, Icon} from 'semantic-ui-react'
import event from '../images/event.jpg'

const extra = (
  <a href="#" ><Icon name='user' />163 friends take part + 653 Others...</a>
)

const LabelExampleRibbonImage = () => (
  <Grid columns={2} >
    <Grid.Column>
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
      <Card
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={extra}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'orange',
          content: 'Food',
          icon: 'spoon',
          ribbon: true,
        }}
        src={event}
      />
      <Card
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={extra}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
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
      <Card
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={extra}
     fluid
     color='pink'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'orange',
          content: 'Food',
          icon: 'spoon',
          ribbon: true,
        }}
        src={event}
      />
      <Card
     header='Pool Party'
     meta='SoNow Event'
     description='Crazy evening around the Duplex pool'
     extra={extra}
     fluid
     color='pink'
      />
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbonImage