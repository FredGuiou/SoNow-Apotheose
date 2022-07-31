import {
  CHANGE_ACTIVE_EVENT, 
  GET_EVENT,
  GET_EVENT_ERROR, 
  GET_EVENT_SUCCESS,
} from '../actions'; 

const initialState = {
  activeEvent: null,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_EVENT:
      return {
        ...state,
        activeEvent: action.id
      };
    case GET_EVENT:
      return {
        ...state,
        isLoading:true,
      };
    case GET_EVENT_SUCCESS:
      return {
        ...state,
        ...action.event,
        isLoading:false, 
        hasError: false,
      };
    case GET_EVENT_ERROR:
      return {
        ...state,
        isLoading:false,
        hasError: true
      };
    default:
      return state;
  }
};

export default reducer;