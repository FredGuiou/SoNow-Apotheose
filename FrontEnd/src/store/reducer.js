import {
  CHANGE_ACTIVE_EVENT, 
  CHANGE_EVENTS_SEARCH,
  CHANGE_FAVORITES_ACTIVE_ITEM, 
  CHANGE_FRIENDS_ACTIVE_ITEM, 
  CHANGE_LOGIN_INPUTS, 
  CHANGE_PROFIL_ACTIVE_ITEM,
  CHANGE_SIGNUP_INPUTS,
  CHANGE_USERS_SEARCH_INPUT, 
  GET_EVENT,
  GET_EVENT_ERROR, 
  GET_EVENT_SUCCESS,
  GET_EVENTS,
  GET_EVENTS_ERROR, 
  GET_EVENTS_SUCCESS,
  GET_FAVORITES,
  GET_FAVORITES_ERROR, 
  GET_FAVORITES_SUCCESS,
  GET_FOLLOWERS,
  GET_FOLLOWERS_ERROR, 
  GET_FOLLOWERS_SUCCESS,
  LOGOUT,
  SUBMIT_LOGIN, 
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_ERROR, 
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_ERROR,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_USERS, 
  GET_USERS_ERROR, 
  GET_USERS_SUCCESS,
  SUBMIT_EVENTS_SEARCH,
  SUBMIT_EVENTS_SEARCH_SUCCESS,
  SUBMIT_EVENTS_SEARCH_ERROR,
  SUBMIT_USERS_SEARCH,
  SUBMIT_USERS_SEARCH_SUCCESS,
  SUBMIT_USERS_SEARCH_ERROR,
  SUBMIT_SIGNUP,
  SUBMIT_SIGNUP_SUCESS,
  SUBMIT_SIGNUP_ERROR,
} from './actions';

const initialState = {
  event: {
    activeEvent: null,
  },
  events: {
    list:[],
    searchInput: '',
    searchResults:[],
    isLoading: false,
  }, 
  favorites: {
    activeItem: `Tous mes favoris`,
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
  user: {
    accessToken: null,
  },
  users: {
    activeItem: 'Abonnes',
    searchInput: '',
    searchResults: [],
    list:[],
    followers:[],
    subscription:[],
    isGetFollowersLoading: false,
    isGetSubscriptionLoading: false,
    isSearchLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_EVENT:
      return {
        ...state,
        event : {
          ...state.event, 
          activeEvent: action.id
        }
      };
    case CHANGE_EVENTS_SEARCH:
      return {
        ...state,
        events : {
          ...state.events, 
          searchInput: action.searchInput,
        }
      };
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
        user : {
          ...state.users, 
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
    case CHANGE_USERS_SEARCH_INPUT:
      return {
        ...state,
        users : {
          ...state.users, 
          searchInput: action.newValue
        }
      };
    case GET_EVENT:
      return {
        ...state,
        event: {
          isLoading:true,
        }
      };
    case GET_EVENT_SUCCESS:
      return {
        ...state,
        event: {
          ...state.event,
          list: action.event,
          isLoading:false, 
          hasError: false,
        }
      };
    case GET_EVENT_ERROR:
      return {
        ...state,
        event: {
          ...state.events,
          isLoading:false,
          hasError: true
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
        user: {
          ...action.user,
          accessToken: action.accessToken,
          refreshToken: action.refreshToken,
          hasLoginError: false
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
        friends: {
          ...state.friends, 
          isGetFollowersLoading: true,
        }
      };
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        friends: {
          ...state.friends,
          followers:[...action.followers],
          isGetFollowersLoading: false, 
          hasGetFollowersError: false,
        }
      };
    case GET_FOLLOWERS_ERROR:
      return {
        ...state,
        friends: {
          ...state.friends,
          isGetFollowersLoading:false, 
          hasGetFollowersError: true,
        }
      };
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        friends: {
          ...state.friends, 
          isGetSubscriptionsLoading: true,
        }
      };
    case GET_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        friends: {
          ...state.friends,
          subscriptions:[...action.subscriptions],
          isGetSubcriptionsLoading: false, 
          hasGetSubcriptionsError: false,
        }
      };
    case GET_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        friends: {
          ...state.friends,
          isGetSubscriptionsLoading:false, 
          hasGetSubscriptionsError: true,
        }
      };
    case GET_USERS:
      return {
        ...state,
        friends: {
          ...state.friends, 
          isGetUsersLoading: true,
        }
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        friends: {
          ...state.friends,
          users:[...action.users],
          isGetUsersLoading: false, 
          hasGetUsersError: false,
        }
      };
    case GET_USERS_ERROR:  
      return {
        ...state,
        friends: {
          ...state.friends,
          isGetSUsersLoading:false, 
          hasGetSUsersError: true,
        }
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        users: {
          ...state.users,
          activeItem: 'Abonnes',
          searchInput: '',
          searchResults: [],
          list:[],
          followers:[],
          subscription:[],
          isGetFollowersLoading: false,
          isGetSubscriptionLoading: false,
          isSearchLoading: false,
        }, 
        events: {
          ...state.events,
          list:[],
          searchInput: '',
          searchResults:[],
          isLoading: false,
        }
      };
    case SUBMIT_EVENTS_SEARCH:
      return {
        ...state,
        events : {
          ...state.events, 
          isLoading: true,
        }
      };
    case SUBMIT_EVENTS_SEARCH_SUCCESS:
      return {
        ...state,
        events : {
          ...state.events, 
          searchResults: action.eventsList,
          hasError: false,
        }
      };
    case SUBMIT_EVENTS_SEARCH_ERROR:
      return {
        ...state,
        events : {
          ...state.events, 
          isLoading: false,
          hasError: true,
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
    case SUBMIT_USERS_SEARCH:
      return {
        ...state,
        user: {
          ...state.user,
          isSearchLoading: true
        }
      };
    case SUBMIT_USERS_SEARCH_ERROR:
      return {
        ...state,
        user: {
          ...state.user, 
          isSearchLoading: false, 
          hasSearchError: true 
        }
      };
    case SUBMIT_USERS_SEARCH_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          searchResults: [action.users],
          isSearchLoading: false, 
          hasSearchError: false
        }
      };
    default:
      return state;
  }
};

export default reducer;