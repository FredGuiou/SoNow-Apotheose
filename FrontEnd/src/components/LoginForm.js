import { Link } from "react-router-dom";

import '../styles/loginForm.scss';

function LoginForm() {
  return (
    <div className="login">
      <form className='login__form'>
        <div className='login__form__input-container'>
          <label>Email </label>
          <input className='login__form__input' type='text' name='email' required />
        </div>
        <div className='login__form__input-container'>
          <label>Mot de passe </label>
          <input className='login__form__input' type='password' name='pass' required />
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

}

export default LoginForm;
