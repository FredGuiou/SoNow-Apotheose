import {
  CHANGE_FRIENDS_ACTIVE_ITEM, 
  CHANGE_FAVORITES_ACTIVE_ITEM,
  CHANGE_ICONS_STATUS,
  CHANGE_LOGIN_INPUTS, 
  CHANGE_PROFIL_ACTIVE_ITEM,
  CHANGE_SIGNUP_INPUTS,
  GET_EVENTS_ATTENDING,
  GET_EVENTS_ATTENDING_ERROR, 
  GET_EVENTS_ATTENDING_SUCCESS,
  GET_FAVORITES,
  GET_FAVORITES_ERROR, 
  GET_FAVORITES_SUCCESS,
  GET_FOLLOWED,
  GET_FOLLOWED_ERROR, 
  GET_FOLLOWED_SUCCESS,
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
  SUBMIT_SIGNUP,
  SUBMIT_SIGNUP_SUCESS,
  SUBMIT_SIGNUP_ERROR,
} from '../actions';

const initialState = {
  accessToken: null,
  attending: {
    isLoading: false,
    list: []
  },
  favorites: {
    activeItem: 'Tous mes favoris',
    isLoading: false,
    list: []
  },
  friends: {
    activeItem: 'Trouver des contacts',
  },
  followed: {
    list: [],
    isLoading: false, 
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
    isRegistered: false
  }, 
  subscriptions: {
    list: [], 
    isLoading: false, 
  },
  iconParticipate: false,
  iconFavorite: false,

  confirmStatus: false,
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
    case CHANGE_ICONS_STATUS:
      return {
        ...state,
        [action.iconsName]: !state[action.iconsName]
      };
    case CHANGE_FRIENDS_ACTIVE_ITEM:
      return {
        ...state,
        friends: {
          ...state.friends,
          activeItem: action.activeItem
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
      case GET_EVENTS_ATTENDING:
        return {
          ...state,
          attending: {
            isLoading:true,
          }
        };
      case GET_EVENTS_ATTENDING_SUCCESS:
        return {
          ...state,
          attending: {
            ...state.attending,
            list: action.events,
            isLoading: false, 
            hasError: false,
          }
        };
    case GET_EVENTS_ATTENDING_ERROR:
      return {
        ...state,
        attending: {
          ...state.attending,
          isLoading:false,
          hasError: true
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
            activeItem: 'Tous mes favoris',
            list: action.events,
            isLoading: false, 
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
      case GET_FOLLOWED:
        return {
          ...state,
          followed: {
            ...state.followed, 
            isLoading: true,
          }
        };
      case GET_FOLLOWED_SUCCESS:
        return {
          ...state,
          followed: {
            ...state.followed,
            list:action.followed,
            isLoading: false, 
            hasError: false,
          }
        };
      case GET_FOLLOWED_ERROR:
        return {
          ...state,
          followed: {
            ...state.followed,
            isLoading:false, 
            hasError: true,
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
          list:action.followers,
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
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
        favorites: {
          activeItem: 'Tous mes favoris',
          isLoading: false,
        },
        friendsActiveItem: 'Abonnes',
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
          isRegistered: true,
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