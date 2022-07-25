import axios from 'axios';
import { submitLoginSuccess, submitLoginError } from '../actions';
import { SUBMIT_LOGIN, } from '../actions';

const loginMiddleware = (store) => (next) => (action) => {
    if (action.type === SUBMIT_LOGIN) {
 
    next(action);

    const state = store.getState();

    const config = {   
      method: 'post',
      url: 'https://sonow.herokuapp.com/api/user/login', 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      }, 
      data: {
        email: state.login.emailInput,
        password:  state.login.passwordInput
      }
    }

    axios(config)
      .then((response) => {
        store.dispatch(submitLoginSuccess(response.data));
        console.log(response);
      })
      .catch(() => {
        store.dispatch(submitLoginError());
      });
  }
  else {
    next(action);
  }
};

export default loginMiddleware;