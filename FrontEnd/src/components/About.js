import { Card, Image, Reveal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../styles/about.scss';
import rpPicture from '../images/rp-picture.jpg';
import ecPicture from '../images/ec-picture.jpg';
import rbPicture from '../images/rb-picture.jpg';
import fgPicture from '../images/fg-picture.jpg';
import slqPicture from '../images/slq-picture.jpg';
import linkedIn from '../images/linkedin-icon.png';
import gitHub from '../images/github-icon.png';
import twitter from '../images/twitter-icon.png';
import loop from '../images/assets/sonow-bis.mp4'; 

function About() {

  return (
    <div className='about-container'>
        <div className='about-container__header'>
          <video className='about-container__header__video' src={loop} autoPlay loop muted />
        </div>
          <div className='about-container__content'>
            <Card.Group
              centered
            >
              <Card>
                <Reveal animated='move down'>
                  <Reveal.Content visible>
                <Image src={slqPicture} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div className='about-container__content__card'>
                      <h1 className='about-container__content__card__title'>Sébastien Le Quellec</h1>
                        <h2 className='about-container__content__card__subtitle'>Développeur Fullstack - Data & API</h2>
                          <div className='about-container__content__card__link'>
                            <a href='https://www.linkedin.com/in/sebastien-le-quellec/' target='_blank' rel='noopener noreferrer'>
                              <img src={linkedIn} alt='linkedin' />
                            </a>
                            <a href='https://github.com/LQ-Sebastien' target='_blank' rel='noopener noreferrer'>
                              <img src={gitHub} alt='github' />
                            </a>
                            <a href ='https://twitter.com/LQSebastien' target='_blank' rel='noopener noreferrer'>
                              <img src={twitter} alt='twitter' />
                            </a>
                        </div>  
                    </div>
                  </Reveal.Content>
                </Reveal>
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
              <Card>
                <Reveal animated='move down'>
                  <Reveal.Content visible>
                <Image src={ecPicture} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div className='about-container__content__card'>
                      <h1 className='about-container__content__card__title'>Elinor Compagnon</h1>
                        <h2 className='about-container__content__card__subtitle'>Développeuse Fullstack - React</h2>
                          <div className='about-container__content__card__link'>
                            <a href='https://www.linkedin.com/in/elinor-compagnon-21162131/' target='_blank' rel='noopener noreferrer'>
                              <img src={linkedIn} alt='linkedin' />
                            </a>
                            <a href='https://github.com/ElinorCm' target='_blank' rel='noopener noreferrer'>
                              <img src={gitHub} alt='github' />
                            </a>
                            <a href ='https://twitter.com/e_linor' target='_blank' rel='noopener noreferrer'>
                              <img src={twitter} alt='twitter' />
                            </a>
                        </div>  
                    </div>
                  </Reveal.Content>
                </Reveal>
                  <Card.Content
                    style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                  >
                    <Card.Header>Elinor C.</Card.Header>
                    <Card.Meta>
                      <span className='about-container__content__meta'>
                        Reine des bouées licorne.
                      </span>
                    </Card.Meta>
                    <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                      Scrum Mistress
                    </Card.Description>
                  </Card.Content>
              </Card>
              <Card>
                <Reveal animated='move down'>
                  <Reveal.Content visible>
                <Image src={rpPicture} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div className='about-container__content__card'>
                      <h1 className='about-container__content__card__title'>Romain Portanguen</h1>
                        <h2 className='about-container__content__card__subtitle'>Développeur Fullstack - React</h2>
                          <div className='about-container__content__card__link'>
                            <a href='https://www.linkedin.com/in/romain-portanguen-a9b0771b7' target='_blank' rel='noopener noreferrer'>
                              <img src={linkedIn} alt='linkedin' />
                            </a>
                            <a href='https://github.com/Romain-Portanguen' target='_blank' rel='noopener noreferrer'>
                              <img src={gitHub} alt='github' />
                            </a>
                            <a href ='https://twitter.com/DukeArtik' target='_blank' rel='noopener noreferrer'>
                              <img src={twitter} alt='twitter' />
                            </a>
                        </div>  
                    </div>
                  </Reveal.Content>
                </Reveal>
                  <Card.Content
                    style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                  >
                    <Card.Header>Romain P.</Card.Header>
                    <Card.Meta>
                      <span className='about-container__content__meta'>
                        Batteur de Dev' Métal.
                      </span>
                    </Card.Meta>
                    <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                      Lead Developer Front
                    </Card.Description>
                  </Card.Content>
              </Card>
              <Card>
                <Reveal animated='move down'>
                  <Reveal.Content visible>
                <Image src={rbPicture} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div className='about-container__content__card'>
                      <h1 className='about-container__content__card__title'>Raphaël Brillant</h1>
                        <h2 className='about-container__content__card__subtitle'>Développeur Fullstack - React</h2>
                          <div className='about-container__content__card__link'>
                            <a href='https://www.linkedin.com/in/rapha%C3%ABl-brillant-3670a61ab/' target='_blank' rel='noopener noreferrer'>
                              <img src={linkedIn} alt='linkedin' />
                            </a>
                            <a href='https://github.com/RaphaelBrillant' target='_blank' rel='noopener noreferrer'>
                              <img src={gitHub} alt='github' />
                            </a>
                            <a href ='https://twitter.com/RaphaelBrillant' target='_blank' rel='noopener noreferrer'>
                              <img src={twitter} alt='twitter' />
                            </a>
                        </div>  
                    </div>
                  </Reveal.Content>
                </Reveal>
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
                <Reveal animated='move down'>
                  <Reveal.Content visible>
                <Image src={fgPicture} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div className='about-container__content__card'>
                      <h1 className='about-container__content__card__title'>Frédéric Guiou</h1>
                        <h2 className='about-container__content__card__subtitle'>Développeur Fullstack - Data & API</h2>
                          <div className='about-container__content__card__link'>
                            <a href='https://www.linkedin.com/in/fredericguiou/' target='_blank' rel='noopener noreferrer'>
                              <img src={linkedIn} alt='linkedin' />
                            </a>
                            <a href='https://github.com/FredGuiou' target='_blank' rel='noopener noreferrer'>
                              <img src={gitHub} alt='github' />
                            </a>
                            <a href ='https://twitter.com/TheBadPitre' target='_blank' rel='noopener noreferrer'>
                              <img src={twitter} alt='twitter' />
                            </a>
                        </div>  
                    </div>
                  </Reveal.Content>
                </Reveal>
                  <Card.Content
                    style={{textAlign: 'center', margin: '1.5rem', border: 'none'}}
                  >
                    <Card.Header>Fred G.</Card.Header>
                    <Card.Meta>
                      <span className='about-container__content__meta'>
                        Doubleur officiel de Mickey Mouse.
                      </span>
                    </Card.Meta>
                    <Card.Description style={{fontSize: '1.1rem', fontWeight: '500',}}>
                      Lead Developer Back
                    </Card.Description>
                  </Card.Content>
              </Card>
            </Card.Group>
          </div> 
        <div className='about-container__footer'>
          <Link className='about-container__footer__link' to='/'>Retour à l'accueil</Link>
        </div>
    </div>
  )
}

export default About;
