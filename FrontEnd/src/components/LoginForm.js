import { Link } from "react-router-dom";
import { useState } from "react";
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
    <div className="login">
      <form onSubmit={(e) => {handleSubmit(e)}} className='login__form'>
        <div className='login__form__input-container'>
          <label>Email </label>
          <input value={emailInput} className='login__form__input' type='text' name='email' required onChange={(e) => {handleEmailChange(e)}}/>
        </div>
        <div className='login__form__input-container'>
          <label>Mot de passe </label>
          <input value={passwordInput} className='login__form__input' type='password' name='pass' required onChange={(e) => {handlePasswordChange(e)}}/>
        </div>
        <div className='login__form__button'>
          <input className='button--pink' type='submit' value="Connexion" />
        </div>
      </form>
      <div className='login__authentification'>
        <p className='login__authentification__text' >Vous n'avez pas de compte ?</p>
        <div>
          <Link className='login__authentification__link' to="/creer-un-compte">Inscrivez-vous</Link>
        </div>    
      </div>
    </div>
);
  };

export default LoginForm;