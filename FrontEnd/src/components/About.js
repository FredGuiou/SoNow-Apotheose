import { Card, Image } from 'semantic-ui-react';

import '../styles/about.scss';

import rpPicture from '../images/rp-picture.jpg';
import ecPicture from '../images/ec-picture.jpg';
import rbPicture from '../images/rb-picture.jpg';
import fgPicture from '../images/fg-picture.jpg';
import slqPicture from '../images/slq-picture.jpg';

function About() {
  return (
    <div className='about-container'>
      <div className='about-container__header'>
        <h1 className='about-container__header__title'>Rencontrez notre équipe :</h1>
      </div>
      <Card.Group 
        itemsPerRow={3} 
        centered
        style={{height: '100vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >
        <Card>
        <Image
            src={ecPicture}
            style={{height: '200px', width: '200px'}}
          />
          <Card.Content
            style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
          >
            <Card.Header>Elinor C.</Card.Header>
            <Card.Description>
              Scrum Mistress 
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={rpPicture}
            style={{height: '200px', width: '200px'}}
          />
          <Card.Content
            style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
          >
            <Card.Header>Romain P.</Card.Header>
            <Card.Description>
              Lead Developpeur Front
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
        <Image
            src={rbPicture}
            style={{height: '200px', width: '200px'}}
          />
          <Card.Content
            style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
          >
            <Card.Header>Raphaël B.</Card.Header>
            <Card.Description>
              Git Master
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
        <Image
            src={fgPicture}
            style={{height: '200px', width: '200px'}}
          />
          <Card.Content
            style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
          >
            <Card.Header>Fred G.</Card.Header>
            <Card.Description>
              Lead Developpeur Back
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
        <Image
            src={slqPicture}
            style={{height: '200px', width: '200px'}}
          />
          <Card.Content
            style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
          >
            <Card.Header>Seb LQ.</Card.Header>
            <Card.Description>
              Product Owner
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default About;
