import { Container, Image, Header } from 'semantic-ui-react';

import "../styles/eventCardDescription.scss";

function EventCardDescription() {
  return (
    <div className='eventCardDescription-main'>
    <Container fluid>
      <Image
        src='https://picsum.photos/1080'
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          position: 'relative',
          top: '0px',
          left: '0px'
        }}
        />
      <Header
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '1.5em',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '0px',
          background: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '100vh',
        }}
      >        
      </Header>
     
    </Container>
    </div>
  );
}

export default EventCardDescription;