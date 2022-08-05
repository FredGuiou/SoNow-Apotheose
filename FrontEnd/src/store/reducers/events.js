import {
  CHANGE_EVENTS_SEARCH,
  GET_EVENTS,
  GET_EVENTS_ERROR, 
  GET_EVENTS_SUCCESS,
  REMOVE_SEARCH_ERROR,
  SUBMIT_EVENTS_SEARCH,
  SUBMIT_EVENTS_SEARCH_SUCCESS,
  SUBMIT_EVENTS_SEARCH_ERROR,
} from '../actions';

const initialState = {
  list:[],
  searchInput: '',
  searchResults:[],
  isGetEventsLoading: false,
  isSearchEventsLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EVENTS_SEARCH:
      return {
        ...state,
        searchInput: action.searchInput,
      };
    case GET_EVENTS:
      return {
        ...state,
        isGetEventsLoading: true,
        hasGetEventsError: false, 
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        list : action.events,
        isGetEventsLoading: false,
        hasGetEventsError: false, 
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        isGetEventsLoading: false,
        hasGetEventsError: true, 
      };
      case REMOVE_SEARCH_ERROR:
        return {
          ...state,
          hasSearchError: false, 
        };  
    case SUBMIT_EVENTS_SEARCH:
      return {
        ...state,
        searchResults: [],
        hasSearchError: false, 
        isSearchLoading: true,
      };
    case SUBMIT_EVENTS_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.eventsList,
        isSearchLoading: false, 
        hasSearchError: false,
      };
    case SUBMIT_EVENTS_SEARCH_ERROR:
      return {
        ...state,
        searchResults: [],
        isSearchLoading: false,
        hasSearchError: true,
      };
    default:
      return state;
    }
  };
  
export default reducer;