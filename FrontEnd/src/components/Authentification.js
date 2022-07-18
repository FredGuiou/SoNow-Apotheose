import '../styles/authentification.scss';
import Login from './LoginForm';
import loop from '../images/assets/sonow.mp4';
import logo from '../images/logo.png';

function Authentification() {
  return (
    <div className='authentification'>
      <div className='authentification-video'>
        <div className='overlay'></div>
        {<video src={loop} autoPlay loop muted />}
      </div>
      <div className='authentification-logo'>
          <img src={logo} alt='SoNow application logo' />
          <Login />
      </div> 
    </div>
  );
}

// TODO: Remove navbar when the user is on the authentification page.

export default Authentification;