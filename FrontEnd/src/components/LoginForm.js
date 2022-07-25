import { useSelector, useDispatch } from 'react-redux';
import { changeLoginInputs, submitLogin } from '../store/actions';
import { Form } from 'semantic-ui-react'
import '../styles/loginForm.scss';

function LoginForm() {

  const { 
    emailInput,
    passwordInput, 
  } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  
  const handleSubmit=(e)=>{
    dispatch(submitLogin());
  };

  const handleEmailChange =(e)=>{
    dispatch(changeLoginInputs('emailInput', e.target.value));
  };

  const handlePasswordChange =(e)=>{
    dispatch(changeLoginInputs('passwordInput', e.target.value));
  }; 

  return (
    <Form onSubmit={(e) => {handleSubmit(e)}} size='large' inverted style={{margin: '0.1em 0', padding: '1em 0'}}>
      <Form.Input className="login__form-input"
        value={emailInput}
        required
        onChange={(e) => {handleEmailChange(e)}}
        fluid label='Email'
        placeholder='Email'
      />
      <Form.Input className="login__form-input"
        value={passwordInput}
        required
        onChange={(e) => {handlePasswordChange(e)}}
        fluid type='password'
        label='Mot de passe'
        placeholder='Mot de passe'
        />
      <Form.Button style={{backgroundColor: '#F30067', color: 'white'}} className="login__form-button">C'est parti !</Form.Button>
    </Form>
  );

}

export default LoginForm;