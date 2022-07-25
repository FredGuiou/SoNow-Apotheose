import axios from 'axios';
import { useState } from "react";
import { Form } from 'semantic-ui-react'
import '../styles/loginForm.scss';

function LoginForm() {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleEmailChange =(e)=>{
    setEmailInput(e.target.value);
  }

  const handlePasswordChange =(e)=>{
    setPasswordInput(e.target.value);
  }
    
  const handleSubmit=(e)=>{
    setIsLoading(true);
    alert('An attempt was made with Email :"' + emailInput +
    '" ,Password :"'+ passwordInput + '"');
    e.preventDefault();
    axios.get(`https://sonow.herokuapp.com/api`)
      .then((response) => {
        setUser({
          ...user, 
          isConnected: true
        })
        setEmailInput('');
        setPasswordInput('');
      })
      .catch((error) => {
        console.log('oups : ', error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form 
      inverted 
      size='large' 
      style={{
        margin: '0.1em 0',
        padding: '1em 0'
      }}
      onSubmit={(e) => {handleSubmit(e)}}
    >
      <Form.Input className="login__form-input"
        value={emailInput}
        required
        onChange={(e) => {handleEmailChange(e)}}
        fluid
        name='email' 
        label='Email'
        placeholder='Email'
      />
      <Form.Input className="login__form-input"
        value={passwordInput}
        required
        onChange={(e) => {handlePasswordChange(e)}}
        fluid
        name='password' 
        type='password'
        label='Mot de passe'
        placeholder='Mot de passe'
      />
      <Form.Button 
        className="login__form-button"
        style={{
          backgroundColor: '#F30067',
          color: 'white'
        }}
      >
        C'est parti !
      </Form.Button>
    </Form>
  );

}

export default LoginForm;