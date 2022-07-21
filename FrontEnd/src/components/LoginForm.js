import { useState } from "react";
import { Form } from 'semantic-ui-react'
import '../styles/loginForm.scss';

function LoginForm() {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoggingLoading, setIsLoggingLoading] = useState(false);
  
  const handleEmailChange =(e)=>{
    setEmailInput(e.target.value);
  }

  const handlePasswordChange =(e)=>{
    setPasswordInput(e.target.value);
  }
  
  const handleSubmit=(e)=>{
      alert('An attempt was made with Email :"' + emailInput +
      '" ,Password :"'+ passwordInput + '"');
      e.preventDefault();

  }

  return (
    <Form onSubmit={(e) => {handleSubmit(e)}} size='large' inverted>
      <Form.Input
        value={emailInput}
        onChange={(e) => {handleEmailChange(e)}}
        fluid label='Email'
        placeholder='Email'
      />
      <Form.Input
        value={passwordInput}
        onChange={(e) => {handlePasswordChange(e)}}
        fluid type='password'
        label='Mot de passe'
        placeholder='Mot de passe'
        />
      <Form.Button>C'est parti !</Form.Button>
    </Form>
  );

}

export default LoginForm;