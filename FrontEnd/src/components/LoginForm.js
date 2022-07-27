import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginInputs, submitLogin } from '../store/actions';
import { Form } from 'semantic-ui-react'
import '../styles/loginForm.scss';

function LoginForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { 
    emailInput,
    passwordInput, 
  } = useSelector((state) => state.login);

  const isConnected = useSelector ((state) => state.user.isConnected);
  
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
    {
      isConnected && navigate(`/feed`)
    }
    </>
  );

}

export default LoginForm;

