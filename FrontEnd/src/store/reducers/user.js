import {
  CHANGE_FAVORITES_ACTIVE_ITEM, 
  CHANGE_FRIENDS_ACTIVE_ITEM, 
  CHANGE_LOGIN_INPUTS, 
  CHANGE_PROFIL_ACTIVE_ITEM,
  CHANGE_SIGNUP_INPUTS,
  GET_FAVORITES,
  GET_FAVORITES_ERROR, 
  GET_FAVORITES_SUCCESS,
  GET_FOLLOWERS,
  GET_FOLLOWERS_ERROR, 
  GET_FOLLOWERS_SUCCESS,
  GET_USER, 
  GET_USER_ERROR, 
  GET_USER_SUCCESS,
  LOGOUT,
  SUBMIT_LOGIN, 
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_ERROR, 
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_ERROR,
  GET_SUBSCRIPTIONS_SUCCESS,
  SUBMIT_SIGNUP,
  SUBMIT_SIGNUP_SUCESS,
  SUBMIT_SIGNUP_ERROR,
} from '../actions';

const initialState = {
  accessToken: null,
  favorites: {
    activeItem: 'Tous mes favoris',
    isLoading: false,
  },
  friends: {
    activeItem: 'Abonnes',
  },
  followers: {
    list: [],
    isLoading: false, 
  },
  login: {
    emailInput: '',
    passwordInput:'',
    isLoading: false,
  },
  profil: {
    activeItem: 'Mes événements',
  },
  signup: {
    firstnameInput: '',
    lastnameInput:'',
    nicknameInput: '',
    emailInput: '',
    passwordInput:'',
    confirmedPasswordInput:'',
    isLoading: false,
  }, 
  subscriptions: {
    list: [], 
    isLoading: false, 
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FAVORITES_ACTIVE_ITEM:
      return {
        ...state,
        favorites : {
          ...state.favorites, 
          activeItem: action.activeItem,
        }
      };
    case CHANGE_FRIENDS_ACTIVE_ITEM:
      return {
        ...state,
        friends : {
          ...state.friends, 
          activeItem: action.activeItem,
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
    case CHANGE_PROFIL_ACTIVE_ITEM:
      return {
        ...state,
        profil : {
          ...state.profil, 
          activeItem: action.activeItem,
        }
      };
    case CHANGE_SIGNUP_INPUTS:
      return {
        ...state,
        signup : {
          ...state.signup, 
          [action.inputName]: action.newValue,
        }
      };
      case GET_FAVORITES:
        return {
          ...state,
          favorites: {
            isLoading:true,
          }
        };
      case GET_FAVORITES_SUCCESS:
        return {
          ...state,
          favorites: {
            ...state.favorites,
            list: action.events,
            isLoading:false, 
            hasError: false,
          }
        };
    case GET_FAVORITES_ERROR:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          isLoading:false,
          hasError: true
        }
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: {
          ...state.followers, 
          isLoading: true,
        }
      };
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: {
          ...state.followers,
          list:[...action.followers],
          isLoading: false, 
          hasError: false,
        }
      };
    case GET_FOLLOWERS_ERROR:
      return {
        ...state,
        followers: {
          ...state.followers,
          isLoading:false, 
          hasError: true,
        }
      };
    case GET_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        ...action.user
      };
    case GET_USER_ERROR:  
      return {
        ...state,
        isLoading:false, 
        hasGetSUserError: true,
      }; 
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: {
          ...state.subscriptions, 
          isLoading: true,
        }
      };
    case GET_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        subscriptions: {
          ...state.subscriptions,
          list:[...action.subscriptions],
          isLoading: false, 
          hasError: false,
        }
      };
    case GET_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        subscriptions: {
          ...state.subscriptions,
          isLoading:false, 
          hasError: true,
        }
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
        favorites: {
          activeItem: 'Tous mes favoris',
          isLoading: false,
        },
        friends: {
          activeItem: 'Abonnes',
        },
        followers: {
          list: [],
          isLoading: false, 
        },
        login: {
          emailInput: '',
          passwordInput:'',
          isLoading: false,
        },
        profil: {
          activeItem: 'Mes événements',
        },
        signup: {
          firstnameInput: '',
          lastnameInput:'',
          nicknameInput: '',
          emailInput: '',
          passwordInput:'',
          confirmedPasswordInput:'',
          isLoading: false,
        }, 
        subscriptions: {
          list: [], 
          isLoading: false, 
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
        ...state.user, 
        isConnected:false,
        hasSignupError: true,
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
        ...action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isConnected:true,
        hasLoginError: false
      };
    case SUBMIT_LOGIN_ERROR:
      return {
        ...state,
        isConnected:false,
        hasLoginError: true,
      };
    default:
      return state;
  }
};
  
export default reducer;