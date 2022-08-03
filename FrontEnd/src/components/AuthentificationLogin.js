import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { changeLoginInputs, submitLogin } from '../store/actions';
import '../styles/authentificationLogin.scss';

function AuthentificationLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { 
    emailInput,
    passwordInput, 
  } = useSelector((state) => state.user.login) || {};

  const isConnected = useSelector ((state) => state.user.accessToken);
  
  const handleSubmit=()=>{
    dispatch(submitLogin());
  };

  const handleEmailChange =(e)=>{
    dispatch(changeLoginInputs('emailInput', e.target.value));
  };

  const handlePasswordChange =(e)=>{
    dispatch(changeLoginInputs('passwordInput', e.target.value));
  };

  return (
    <>
    <Form 
      inverted 
      size='large' 
      style={{
        margin: '1rem',
        padding: '1rem'
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
    {
      isConnected && navigate(`/feed`)
    }
    </>
  );

}

export default AuthentificationLogin;

