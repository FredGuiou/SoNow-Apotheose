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
          <Login />
      </div> 
    </div>
  );
}

// TODO: Remove navbar when the user is on the authentification page.

export default Authentification;