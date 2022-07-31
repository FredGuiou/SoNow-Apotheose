import {
  CHANGE_USERS_SEARCH_INPUT, 
  GET_USERS, 
  GET_USERS_ERROR, 
  GET_USERS_SUCCESS,
  SUBMIT_USERS_SEARCH,
  SUBMIT_USERS_SEARCH_SUCCESS,
  SUBMIT_USERS_SEARCH_ERROR,
} from '../actions';

const initialState = {
  isGetSUsersLoading:false, 
  isSearchLoading: false,
  list:[],
  searchInput: '',
  searchResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERS_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.newValue
      };
    case GET_USERS:
      return {
        ...state,
        list: action.users,
        isGetUsersLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        list:[...action.users],
        isGetUsersLoading: false, 
        hasGetUsersError: false,
      };
    case GET_USERS_ERROR:  
      return {
        ...state,
        isGetSUsersLoading:false, 
        hasGetSUsersError: true,
      };
    case SUBMIT_USERS_SEARCH:
      return {
        ...state,
        isSearchLoading: true,
      };
    case SUBMIT_USERS_SEARCH_ERROR:
      return {
        ...state,
        isSearchLoading: false, 
        hasSearchError: true 
      };
    case SUBMIT_USERS_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: [action.users],
        isSearchLoading: false, 
        hasSearchError: false
      };
    default:
      return state;
    }
  };

export default reducer;