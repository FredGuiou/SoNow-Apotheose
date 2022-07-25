import { useDispatch, useSelector } from 'react-redux';
import { changeSignupInputs, submitSignup } from '../store/actions';
import { Container, Form, Grid, Header } from 'semantic-ui-react';
import loop from '../images/assets/sonow-bis.mp4';

import "../styles/createAccount.scss";

function CreateAccount() {

  const { 
    firtsnameInput,
    lastnameInput,
    nicknameInput,
    emailInput,
    passwordInput, 
    confirmedPasswordInput, 
  } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const handleSubmit=(e)=>{
    dispatch(submitSignup());
  };

  const handleFirstnameChange =(e)=>{
    dispatch(changeSignupInputs('firstnameInput', e.target.value));
  };

  const handleLastnameChange =(e)=>{
    dispatch(changeSignupInputs('lastnameInput', e.target.value));
  };

  const handleNicknameChange =(e)=>{
    dispatch(changeSignupInputs('nicknameInput', e.target.value));
  };

  const handleEmailChange =(e)=>{
    dispatch(changeSignupInputs('emailInput', e.target.value));
  };

  const handlePasswordChange =(e)=>{
    dispatch(changeSignupInputs('passwordInput', e.target.value));
  };
  
  const handleConfirmedPasswordChange =(e)=>{
    dispatch(changeSignupInputs('confirmedPasswordInput', e.target.value));
  };

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
          <Form 
            id='login'
            name='login'
            inverted 
            size='large' 
            onSubmit={(e) => {handleSubmit(e)}}
          >
        <Form.Group widths='equal'>
          <Form.Input 
            fluid
            required 
            name='firstname'
            label='Prénom'
            placeholder='Prénom' 
            value={firtsnameInput} 
            onChange={(e) => {handleFirstnameChange(e)}}
          />
          <Form.Input
            fluid
            required
            name='lastname'
            label='Nom' 
            placeholder='Nom' 
            value={lastnameInput}  onChange={(e) => {handleLastnameChange(e)}}
          />
        </Form.Group>
        <Form.Input 
          fluid
          name='email'
          label='Email' 
          placeholder='Email' 
          value={emailInput} required onChange={(e) => {handleEmailChange(e)}}
        />
        <Form.Input 
          fluid
          required
          name='nickname' 
          label='Pseudo' 
          placeholder="Nom d'utilisateur"
          value={nicknameInput}
          onChange={(e) => {handleNicknameChange(e)}}
        />
        <Form.Input 
          fluid
          required 
          type='password' 
          name='password'
          label='Mot de passe'
          placeholder='Mot de passe' 
          value={passwordInput}
          onChange={(e) => {handlePasswordChange(e)}}
        />
        <Form.Input 
          fluid
          required
          type='password'
          name='confirmedPassword'
          label='Confirmation du mot de passe'
          placeholder='Confirmation du mot de passe' 
          value={confirmedPasswordInput}
          onChange={(e) => {handleConfirmedPasswordChange(e)}}
        />
        <Form.Checkbox
          defaultChecked
          label="En vous inscrivant sur SoNow vous acceptez nos conditions d'utilisation et notre politique de confidentialité" 
        />
        <Form.Button 
          style={{
            backgroundColor: '#F30067',
            color: 'white'
          }}
        >
          C'est parti !
        </Form.Button>
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