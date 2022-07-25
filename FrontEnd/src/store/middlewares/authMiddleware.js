import axios from 'axios';
import { submitSignupSuccess, submitLoginError } from '../actions';
import { SUBMIT_LOGIN, } from '../actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_LOGIN) {
    next(action);
    
    const state = store.getState();

    const config = {   
      method: 'posts',
      url: 'https://sonow.herokuapp.com/api/user/signup', 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      }, 
      data: {
        firstname: state.signup.firtsnameInput,
        lastname:  state.signup.lastnameInput,
        nickname:  state.signup.nicknameInput,
        email:  state.signup.email,
        password:  state.signup.password
      }
    }

    axios(config)
      .then((response) => {
        store.dispatch(submitSignupSuccess(response.data));
      })
      .catch(() => {
        store.dispatch(submitLoginError());
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;