import { Link } from "react-router-dom";
import { Container, Grid, Header } from 'semantic-ui-react';
 
import '../styles/authentification.scss';
import Login from './LoginForm';
import loop from '../images/assets/sonow.MOV';
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
        <Container className="login__grid-container" style={{display: 'flex', justifyContent: 'center'}}>
          <Grid className="login__grid-content" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Grid.Column className="login__form-container" style={{margin: '1em 0 1em 0', padding: '0.5em 0 0.5em 0'}}>
              <Header inverted as='h1' textAlign='center' style={{marginTop: '15px'}}>
                Se connecter
              </Header>
              <Login />
              <div className="login__form-footer">
              <p>Vous n'avez pas encore de compte ?</p>
              <Link className='create-account__link' to="/creer-un-compte">Inscrivez-vous</Link>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
    </div>
  </div>
);
}

export default Authentification;