import {
  GET_TAGS,
  GET_TAGS_ERROR,
  GET_TAGS_SUCCESS
} from '../actions';

const initialState = {
  isLoading: false, 
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        list:action.tags,
        isLoading: false, 
        hasError: false,
      };
    case GET_TAGS_ERROR:  
      return {
        ...state,
        isLoading: false, 
        hasError: true,
      };
    default:
      return state;
  }
};

export default reducer;