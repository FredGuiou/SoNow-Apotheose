import React from 'react'
import { useState } from 'react'
import { Container, Header, Image, Icon } from 'semantic-ui-react'
import profile from '../images/profile.jpg'
import "../styles/userCard.scss"


const HeaderExampleImage = () => (
  
  <div>
  <Header as='h2' attached='top' style={{backgroundColor: 'black' }} dividing>
    
    <Container fluid
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Container fluid>
        <p className='profile-counter__name'>Romain P.</p>
        <Image circular src={profile} size='tiny'/>
      </Container>
      <Header.Subheader fluid
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          color: 'white'
        }}
      >
        <Container fluid
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
          }} 
        >
          <p className='profile-counter__content'>698</p>
          <p className='profile-counter__title'>Abonnés</p>
        </Container>
    </Header.Subheader>
      <Icon circular size='small' name='setting' style={{color: 'white'}} />
    </Container>

    

    <Header.Subheader
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'white'
      }}

    >
      <Icon circular size='small' name='add user' style={{backgroundColor: '#F30067', marginBottom: '10px'}} />
      <Icon circular size='small' name='add' style={{backgroundColor: '#F30067'}} />
      <Icon circular size='small' name='checked calendar' style={{backgroundColor: '#F30067'}} />
    
    </Header.Subheader>


  </Header>
  </div>

)

export default HeaderExampleImage