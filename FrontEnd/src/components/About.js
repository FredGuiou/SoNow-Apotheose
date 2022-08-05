import { Card, Image } from 'semantic-ui-react';

import '../styles/about.scss';
import rpPicture from '../images/rp-picture.jpg';
import ecPicture from '../images/ec-picture.jpg';
import rbPicture from '../images/rb-picture.jpg';
import fgPicture from '../images/fg-picture.jpg';
import slqPicture from '../images/slq-picture.jpg';
import loop from '../images/assets/sonow-bis.mp4'; 

function About() {
  return (
    <div className='about-container'>
      <div className='about-container__video'>
        <div className='about-container__video__overlay'></div>
        <video className='about-container__video__content' src={loop} autoPlay loop muted />
      </div>
        <div className='about-container__header'>
          <h1 className='about-container__header__title'>Rencontrez notre équipe :</h1>
        </div>
          <div className='about-container__content'>
            <Card>
                <Image
                    src={slqPicture}
                  />
                  <Card.Content
                    style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                  >
                    <Card.Header>Seb LQ.</Card.Header>
                    <Card.Meta>
                      <span className='about-container__content__meta'>
                        Breton, tout simplement.
                      </span>
                    </Card.Meta>
                    <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                      Product Owner
                    </Card.Description>
                  </Card.Content>
                </Card>
              <Card.Group centered>
              <Card>
              <Image
                  src={ecPicture}
                />
                <Card.Content
                  style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                >
                  <Card.Header>Elinor C.</Card.Header>
                  <Card.Meta>
                    <span className='about-container__content__meta'>
                      Reine des bouées Licorne.
                    </span>
                  </Card.Meta>
                  <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                    Scrum Mistress
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image
                  src={rpPicture}
                />
                <Card.Content
                  style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                >
                  <Card.Header>Romain P.</Card.Header>
                  <Card.Meta>
                    <span className='about-container__content__meta'>
                      Batteur de Dev' Metal.
                    </span>
                  </Card.Meta>
                  <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                    Lead Developpeur Front
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
            <Card.Group centered>
              <Card>
              <Image
                  src={rbPicture}
                />
                <Card.Content
                  style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                >
                  <Card.Header>Raphaël B.</Card.Header>
                  <Card.Meta>
                    <span className='about-container__content__meta'>
                      Pilote de ligne chez Dev' France.
                    </span>
                  </Card.Meta>
                  <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                    Git Master
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
              <Image
                  src={fgPicture}
                />
                <Card.Content
                  style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                >
                  <Card.Header>Fred G.</Card.Header>
                  <Card.Meta>
                    <span className='about-container__content__meta'>
                      Voix-Off officielle de Mickey Mouse.
                    </span>
                  </Card.Meta>
                  <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                    Lead Developpeur Back
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </div> 
    </div>
  )
}

export default About;
