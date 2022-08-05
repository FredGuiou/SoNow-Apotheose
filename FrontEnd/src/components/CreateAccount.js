import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeSignupInputs, submitSignup } from '../store/actions';
import { Form, Header } from 'semantic-ui-react';
import loop from '../images/assets/sonow-bis.mp4';

import "../styles/createAccount.scss";

function CreateAccount() {

  const { 
    firstnameInput,
    lastnameInput,
    nicknameInput, 
    emailInput,
    passwordInput, 
    confirmedPasswordInput, 
    isRegistered
  } = useSelector((state) => state.user.signup) || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit=()=>{
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
    <div className="create-account">
      <div className='create-account__video'>
        <div className='create-account__video__overlay'></div>
        <video className='create-account__video__content' src={loop} autoPlay loop muted />
      </div>
        <div className="create-account__main">
            <div className="account-container">
              <div className="account-container__form">
                <Header inverted as='h1' textAlign='center' style={{marginTop: '15px'}}>
                    Créer un compte
                </Header>
                  <Form 
                    inverted 
                    size='large'
                    // style={{
                    //   margin: '1rem',
                    //   padding: '1rem'
                    // }}
                    onSubmit={(e) => {handleSubmit(e)}}
                  >
                      <Form.Input className='create-account__form-input'                     
                        fluid
                        required 
                        name='firstname'
                        label='Prénom'
                        placeholder='Prénom' 
                        value={firstnameInput} 
                        onChange={(e) => {handleFirstnameChange(e)}}
                      />
                      <Form.Input className='create-account__form-input'
                        fluid
                        required
                        name='lastname'
                        label='Nom' 
                        placeholder='Nom' 
                        value={lastnameInput}  onChange={(e) => {handleLastnameChange(e)}}
                      />
                      <Form.Input
                        fluid
                        name='email'
                        label='Email' 
                        placeholder='Email' 
                        value={emailInput} required onChange={(e) => {handleEmailChange(e)}}
                      />
                      <Form.Input className='create-account__form-input'
                        fluid
                        required
                        name='nickname' 
                        label='Pseudo' 
                        placeholder="Nom d'utilisateur"
                        value={nicknameInput}
                        onChange={(e) => {handleNicknameChange(e)}}
                      />
                      <Form.Input className='create-account__form-input'
                        fluid
                        required 
                        type='password' 
                        name='password'
                        label='Mot de passe'
                        placeholder='Mot de passe' 
                        value={passwordInput}
                        onChange={(e) => {handlePasswordChange(e)}}
                      />
                      <Form.Input className='create-account__form-input'
                        fluid
                        required
                        type='password'
                        name='confirmedPassword'
                        label='Confirmation du mot de passe'
                        placeholder='Confirmation du mot de passe' 
                        value={confirmedPasswordInput}
                        onChange={(e) => {handleConfirmedPasswordChange(e)}}
                      />
                      <Form.Checkbox className="create-account__form-checkbox"
                        defaultChecked
                        label="En vous inscrivant sur SoNow vous acceptez nos conditions d'utilisation
                               et notre politique de confidentialité" 
                      />
                      <Form.Button className="create-account__form-button"
                        style={{
                          backgroundColor: '#F30067',
                          color: 'white'
                        }}
                      >
                        C'est parti !
                      </Form.Button>
                      {
                        isRegistered && navigate('/')
                      }
                  </Form>
                  <div className="account-container__form__footer">
                    <p>Vous avez déjà un compte ?</p>
                      <Link className='account-container__form__footer__link' to='/'>Connectez-vous</Link>
                  </div> 
              </div>
            </div>
          </div>
        </div>
  );
}

export default CreateAccount;