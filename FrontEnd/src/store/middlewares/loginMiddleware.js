import axios from 'axios';
import { getEvents, SUBMIT_LOGIN, submitLoginSuccess, submitLoginError, LOGOUT} from '../actions';

const loginMiddleware = (store) => (next) => (action) => {
  
  if (action.type === SUBMIT_LOGIN) {
 
    next(action);

    const state = store.getState();

    let url = 'https://sonow.herokuapp.com/api/user/login/'

    const config = {   
      method: 'post',
      url: url + '?nocache=' + new Date().getTime(), 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      }, 
      data: {
        email: state.user.login.emailInput,
        password:  state.user.login.passwordInput
      }
    }

    axios(config)
      .then((response) => {
        store.dispatch(submitLoginSuccess(response.data.accessToken, response.data.refreshToken, response.data.user));
        localStorage.setItem('accessToken', `${response.data.accessToken}`);
        localStorage.setItem('refreshToken', `${response.data.refreshToken}`);
        localStorage.setItem('id', `${response.data.user.id}`);
        store.dispatch(getEvents());
      })
      .catch(() => {
        store.dispatch(submitLoginError());
      });
  
    } else if (action.type === LOGOUT) {
    next(action);

    let url = 'https://sonow.herokuapp.com/api/user/logout/'

    const config = {   
      method: 'get',
      url: url + '?nocache=' + new Date().getTime(), 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      }, 
    }

    axios(config)
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('id');
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    next(action);
  }
};

export default loginMiddleware;