import axios from 'axios';
import { submitLoginSuccess, submitLoginError, getEvents} from '../actions';
import { SUBMIT_LOGIN, } from '../actions';

const loginMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_LOGIN) {

    console.log('loginMiddleware');
 
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
        console.log(`submit login success ${response.data}`);
        store.dispatch(submitLoginSuccess(response.data.accessToken, response.data.refreshToken, response.data.user));
        store.dispatch(getEvents());
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