import { Link } from "react-router-dom";
import { Container, Grid, Header } from 'semantic-ui-react';
 
import '../styles/authentification.scss';
import Login from './LoginForm';
import loop from '../images/assets/sonow.mp4';
import logo from '../images/logo.png';

function Authentification() {

return (
  <div className='authentification'>
    <div className='authentification__video'>
      <div className='authentification__video__overlay'></div>
      <video className='authentification__video__content' src={loop} autoPlay loop muted />
    </div>
    <div className='authentification__main'>
        <img className='authentification__main__logo' src={logo} alt='SoNow application logo' />
        <Container className="login__grid-container">
          <Grid className="login__grid-content" textAlign='center' verticalAlign='middle'>
            <Grid.Column className="login__form-container">
              <Header inverted as='h1' textAlign='center'>
                Se connecter
              </Header>
              <Login />
              <p>Vous n'avez pas encore de compte ?</p>
              <Link className='create-account__link' to="/creer-un-compte">Inscrivez-vous</Link>
            </Grid.Column>
          </Grid>
        </Container>
    </div>
  </div>
);
}


// TODO: Remove navbar when the user is on the authentification page.

export default Authentification;