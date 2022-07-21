import React from 'react'
import { useState } from 'react'
import { Container, Grid, Header, Image, Icon } from 'semantic-ui-react'
import profile from '../images/profile.jpg'
import "../styles/userCard.scss"


const HeaderExampleImage = () => (
  
<Header attached='top' style={{backgroundColor: 'black', borderBottom: '1px solid white'}} dividing>
    
    <Grid
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Grid.Column 
       width={3}
      >
        <div style={{margin: '0.5em'}}>
          <p className='profile-counter__name'>Romain P.</p>
          <Image circular src={profile} size='tiny'/>
        </div>
      </Grid.Column>

      <Grid.Column
      width={8}
      style={{
        color:'white',
        display: 'flex',
      }}
      >
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0.5em'
          }}
        >
          <p className='profile-counter__content'>562</p>
          <p className='profile-counter__title'>Evènements</p>
        </Container>
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0.5em'
          }} 
        >
          <p className='profile-counter__content'>1364</p>
          <p className='profile-counter__title'>Abonnements</p>
        </Container>
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0.5em'
          }} 
        >
          <p className='profile-counter__content'>698</p>
          <p className='profile-counter__title'>Abonnés</p>
        </Container>
        </Grid.Column>
        <Grid.Column
        width={3}
        >
      <Icon circular name='setting' size='large' style={{ color: 'white', margin: '0.5em'}} />
      </Grid.Column>
    </Grid>

    
    <Header.Subheader
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'white'
      }}

    >
      <Icon circular size='large' name='add user' />
      <Icon circular size='large' name='add' />
      <Icon circular size='large' name='checked calendar' />
    
    </Header.Subheader>


  </Header>
  
)

export default HeaderExampleImage