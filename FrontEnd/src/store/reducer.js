import {
  CHANGE_SIGNUP_INPUTS,
  SUBMIT_SIGNUP,
  SUBMIT_SIGNUP_SUCESS,
  SUBMIT_SIGNUP_ERROR,
  CHANGE_LOGIN_INPUTS, 
  SUBMIT_LOGIN, 
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_ERROR,
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR
} from './actions';

const initialState = {
  user: {},
  signup: {
    firstnameInput: '',
    lastnameInput:'',
    nicknameInput: '',
    emailInput: '',
    passwordInput:'',
    confirmedPasswordInput:'',
    isLoading: false,
  }, 
  login: {
    emailInput: '',
    passwordInput:'',
    isLoading: false,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIGNUP_INPUTS:
      return {
        ...state,
        signup : {
          ...state.signup, 
          [action.inputName]: action.newValue,
        }
      };
    case SUBMIT_SIGNUP:
      return {
        ...state,
        signup : {
          ...state.signup, 
          isLoading: true,
        }
      };
    case SUBMIT_SIGNUP_SUCESS:
      return {
        ...state,
        signup : {
          ...state.signup, 
          isLoading: false,
          hasSignupError: false,
        }
      };
      case SUBMIT_SIGNUP_ERROR:
        return {
          ...state,
          user: {
            ...state.user, 
            isConnected:false,
            hasSignupError: true,
          }
        };
    case CHANGE_LOGIN_INPUTS:
      return {
        ...state,
        login: {
          ...state.login,
          [action.inputName]: action.newValue
        }
      };
    case SUBMIT_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: true
        }
      };
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...action.user,
          accessToken: action.accessToken,
          refreshToken: action.refreshToken,
          isConnected:true,
          hasLoginError: false
        }
      };
    case SUBMIT_LOGIN_ERROR:
      return {
        ...state,
        user: {
          ...state.user, 
          isConnected:false,
          hasLoginError: true,
        }
      };
      case GET_EVENTS:
        return {
          ...state,
          events: {
            isLoading:true,
          }
        };
      case GET_EVENTS_SUCCESS:
        return {
          ...state,
          events: {
            ...state.events,
            ...action.events,
            isLoading:false, 
            hasError: false,
          }
        };
      case GET_EVENTS_ERROR:
        return {
          ...state,
          events: {
            ...state.events,
            isLoading:false,
            hasError: true
          }
        };
    default:
      return state;
  }
};

export default reducer;