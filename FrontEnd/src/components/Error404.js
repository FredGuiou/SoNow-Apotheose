import "../styles/error404.scss";
import loop from '../images/assets/404SONOW.mp4';
import { Container } from "semantic-ui-react";

function Error404() {
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
      </div>
    </Container>
  );
}

export default Error404;