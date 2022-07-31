import axios from 'axios';
import { getEvents, SUBMIT_LOGIN, submitLoginSuccess, submitLoginError, LOGOUT} from '../actions';

const loginMiddleware = (store) => (next) => (action) => {
  
  if (action.type === SUBMIT_LOGIN) {

    // console.log('loginMiddleware');
 
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
        email: state.user.login.emailInput,
        password:  state.user.login.passwordInput
      }
    }

    axios(config)
      .then((response) => {
        // console.log(`submit login success ${response.data}`);
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
    // console.log('logoutMiddleware');
    next(action);

    const config = {   
      method: 'get',
      url: 'https://sonow.herokuapp.com/api/user/logout', 
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
        // console.log(`submit logout`);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    next(action);
  }
};

export default loginMiddleware;