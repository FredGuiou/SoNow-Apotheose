import axios from 'axios';
import { submitSignupSuccess, submitSignupError } from '../actions';
import { SUBMIT_SIGNUP } from '../actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_SIGNUP) {

    next(action);

    const state = store.getState();

    let url = 'https://sonow.herokuapp.com/api/user/signup/'

    const config = {   
      method: 'post',
      url: url + '?nocache=' + new Date().getTime(),

      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      }, 
      data: {
        firstname: state.user.signup.firstnameInput,
        lastname:  state.user.signup.lastnameInput,
        nickname:  state.user.signup.nicknameInput,
        email:  state.user.signup.emailInput,
        password:  state.user.signup.passwordInput
      }
    };

    axios(config)
      .then(() => {
        store.dispatch(submitSignupSuccess());
      })
      .catch(() => {
        store.dispatch(submitSignupError());
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware; 