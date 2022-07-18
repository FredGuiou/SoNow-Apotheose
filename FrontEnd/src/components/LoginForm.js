import { Link } from "react-router-dom";

import '../styles/loginForm.scss';

function LoginForm() {
  return (
    <form className='form'>
      <div className='input-container'>
        <label>Email </label>
        <input type='text' name='email' required />
      </div>
      <div className='input-container'>
        <label>Mot de passe </label>
        <input type='password' name='pass' required />
      </div>
      <div className='button-container'>
        <input type='submit' value="Connexion" />
      </div>
      <p className='authentification-login-text' >Vous n'avez pas de compte ?</p>
      <Link className='authentification-login-link' to="/creer-un-compte">Inscrivez-vous</Link>
    </form>
);

}

export default LoginForm;
