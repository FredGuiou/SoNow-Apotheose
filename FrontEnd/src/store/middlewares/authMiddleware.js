import axios from 'axios';
import { submitSignupSuccess, submitSignupError } from '../actions';
import { SUBMIT_SIGNUP } from '../actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_SIGNUP) {

    console.log('authMiddleware');

    next(action);

    const state = store.getState();

    const config = {   
      method: 'post',
      url: 'https://sonow.herokuapp.com/api/user/signup', 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      }, 
      data: {
        firstname: state.signup.firstnameInput,
        lastname:  state.signup.lastnameInput,
        nickname:  state.signup.nicknameInput,
        email:  state.signup.emailInput,
        password:  state.signup.passwordInput
      }
    };

    axios(config)
      .then(() => {
        console.log('submit success');
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