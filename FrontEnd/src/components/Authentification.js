import { Link } from "react-router-dom";
import { Header } from 'semantic-ui-react';
 
import '../styles/authentification.scss';
import Login from './AuthentificationLogin';
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
        <div className="login-container">
            <div className="login-container__form">
              <Header inverted as='h1' textAlign='center' style={{marginTop: '15px'}}>
                Se connecter
              </Header>
              <Login />
              <div className="login-container__form__footer">
              <p>Vous n'avez pas encore de compte ?</p>
              <Link className='login-container__form__footer__link' to="/creer-un-compte">Inscrivez-vous</Link>
              <Link className="login-container__form__footer__link" to="/a-propos">À propos</Link>
              </div>
            </div>
        </div>
    </div>
  </div>
);
}

export default Authentification;