import { useNavigate } from 'react-router-dom';
import "../styles/error404.scss";
import loop from '../images/assets/404SONOW.mp4';
import { Container } from "semantic-ui-react";

function Error404() {

  const navigate = useNavigate();

  return (
    <Container className="create-account"
      style={{ 
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
      <div className="error-404__video">
      <video className='error-404__video__content' src={loop} autoPlay loop muted />
      {
        setTimeout(() => {
          navigate('/feed');
        }, 5000)
      }
      </div>
      <div className="error-404__text">
      <p>Vous êtes perdu ?</p>
      <p>Patientez, on s'occupe de tout...</p>
      </div>
    </Container>
  );
}

export default Error404;