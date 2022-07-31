import {
  GET_CONSULTED_USER, 
  GET_CONSULTED_USER_ERROR, 
  GET_CONSULTED_USER_SUCCESS,
} from '../actions';

const initialState = {
  isLoading:false, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONSULTED_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONSULTED_USER_SUCCESS:
      return {
        ...state,
        ...action.user
      };
    case GET_CONSULTED_USER_ERROR:  
      return {
        ...state,
        isLoading:false, 
        hasGetSUserError: true,
      };
    default:
      return state;
  }
};

export default reducer;