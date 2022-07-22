import "../styles/createAccount.scss";
import { useState } from "react";
import { Container, Form, Grid, Header, Image } from 'semantic-ui-react';
import loop from '../images/assets/sonow-bis.mp4';

function CreateAccount() {


  const [firtsnameInput, setFirstnameInput] = useState('');
  const [lastnameInput, setLastnameInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmedPasswordInput, setConfirmedPasswordInput] = useState('');
  const [isCreateAccountLoading, setIsCreateAccountLoading] = useState(false);
  

  const handleFirstnameChange =(e)=>{
    setFirstnameInput(e.target.value);
  }

  const handleLastnameChange =(e)=>{
    setLastnameInput(e.target.value);
  } 

  const handleNicknameChange =(e)=>{
    setNicknameInput(e.target.value);
  }

  const handleEmailChange =(e)=>{
    setEmailInput(e.target.value);
  }

  const handlePasswordChange =(e)=>{
    setPasswordInput(e.target.value);
  }

  const handleConfirmedPasswordChange =(e)=>{
    setConfirmedPasswordInput(e.target.value);
  }

  const handleSubmit=(e)=>{
    if(passwordInput!==confirmedPasswordInput)
    {
      // if 'password' and 'confirmedPassword'
      // does not match.
      alert("password don't Match");
    }
    else{
      // alert 
      // a new form is created .
      alert('A new form has been sent !');
    }
    e.preventDefault();

  }

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
      <div className='create-account__video'>
        <div className='create-account__video__overlay'></div>
        <video className='create-account__video__content' src={loop} autoPlay loop muted />
      </div>
      <Container className="create-account__grid-container">
      <Grid className="create-account__grid-content" textAlign='center' verticalAlign='middle'>
        <Grid.Column className="create-account__form-container">
          <Header inverted as='h1' textAlign='center'>
            Créer un compte
          </Header>
          <Form size='large' inverted onSubmit={(e) => {handleSubmit(e)}}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Prénom' placeholder='Prénom' value={firtsnameInput} required onChange={(e) => {handleFirstnameChange(e)}}/>
          <Form.Input fluid label='Nom' placeholder='Nom' value={lastnameInput} required onChange={(e) => {handleLastnameChange(e)}}/>
        </Form.Group>
        <Form.Input fluid label='Email' placeholder='Email' value={emailInput} required onChange={(e) => {handleEmailChange(e)}}/>
        <Form.Input fluid label='Pseudo' placeholder='Pseudo' value={nicknameInput} required onChange={(e) => {handleNicknameChange(e)}}/>
          <Form.Input fluid type='password' label='Mot de passe' placeholder='Mot de passe' value={passwordInput} required onChange={(e) => {handlePasswordChange(e)}}/>
          <Form.Input fluid type='password' label='Confirmation du mot de passe' placeholder='Confirmation du mot de passe' value={confirmedPasswordInput} required onChange={(e) => {handleConfirmedPasswordChange(e)}}/>
        <Form.Checkbox label="En vous inscrivant sur SoNow vous acceptez nos conditions d'utilisation et notre politique de confidentialité" defaultChecked/>
        <Form.Button style={{backgroundColor: '#F30067', color: 'white'}}>C'est parti !</Form.Button>
        </Form>
          <p>Vous avez déjà un compte ?</p>
          <a href='/'>Connectez-vous</a>
        </Grid.Column>
      </Grid>
      </Container>
    </Container>
  );
}

export default CreateAccount;