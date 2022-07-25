export const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SUBMIT_SIGNUP_ERROR = 'SUBMIT_SIGNUP_ERROR';
export const SUBMIT_SIGNUP_SUCESS = 'SUBMIT_SIGNUP_SUCESS';
export const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_LOGIN_ERROR = 'SUBMIT_LOGIN_ERROR';

export const changeSignupInputs= (inputName, newValue) => ({
  type: CHANGE_SIGNUP_INPUTS,
  inputName,
  newValue,
});

export const submitSignup= () => ({
  type: SUBMIT_SIGNUP,
});

export const submitSignupSuccess= (user) => ({
  type: SUBMIT_SIGNUP_SUCESS,
  user,
});

export const submitSignupError= (user) => ({
  type: SUBMIT_SIGNUP_ERROR,
});

export const changeLoginInputs= (inputName, newValue) => ({
  type: CHANGE_LOGIN_INPUTS,
  inputName,
  newValue,
});

export const submitLogin= () => ({
  type: SUBMIT_LOGIN,
});

export const submitLoginSuccess = () => ({
  type: SUBMIT_LOGIN_SUCCESS,
});

export const submitLoginError= (user) => ({
  type: SUBMIT_LOGIN_ERROR,
});