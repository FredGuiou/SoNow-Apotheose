import axios from 'axios';
import { useState } from "react";
import { Container, Form, Grid, Header } from 'semantic-ui-react';
import loop from '../images/assets/sonow-bis.mp4';

import "../styles/createAccount.scss";

function CreateAccount() {

  const [user, setUser] = useState({});
  const [firtsnameInput, setFirstnameInput] = useState('');
  const [lastnameInput, setLastnameInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmedPasswordInput, setConfirmedPasswordInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
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
    /*let formData = new FormData();    //formdata object

    formData.append('firstname', firtsnameInput);   //append the values with key, value pair
    formData.append('lastname', lastnameInput);
    formData.append('nickname', nicknameInput);
    formData.append('email', emailInput);
    formData.append('password', passwordInput);*/

    const formData = {
      "firstname":  `${firtsnameInput}`,
      "lastname":  `${lastnameInput}`,
      "nickname":  `${firtsnameInput}`,
      "email":  `${emailInput}`,
      "password":  `${passwordInput}`
    }

    const config = {     
        headers: { 
          'content-type': 'application/json; charset=utf-8', 
          //application/json; charset=utf-8
          //'Access-Control-Allow-Origin': 'http://62.241.121.23:3000'
          'Access-Control-Allow-Origin': '*'
        }
    }
    
    setIsLoading(true);
    axios.post(`https://sonow.herokuapp.com/api/user/signup`, formData, config)
      .then((response) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,
          accessToken: response.data.token,
          isConnected: false,
        })
      localStorage.setItem('accessToken', `${response.data.token.accessToken}`);
      setFirstnameInput('');
      setLastnameInput('');
      setNicknameInput('');
      setEmailInput('');
      setPasswordInput('');
      console.log(response);
      })
      .catch((error) => {
        console.log('oups : ', error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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