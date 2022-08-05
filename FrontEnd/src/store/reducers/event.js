import {
  CHANGE_ACTIVE_EVENT, 
  GET_EVENT,
  GET_EVENT_ERROR, 
  GET_EVENT_SUCCESS,
} from '../actions'; 

const initialState = {
  id: 1, 
  title: 'The Cure',
  metadescription: 'Lorem ipsum dolor sit amet',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nisi ligula, a varius elit viverra ac. Aenean et libero eget quam euismod fringilla quis eu ipsum. In sagittis orci id euismod ornare. Ut ac erat nec metus imperdiet porta. Pellentesque vitae aliquet purus, ac sagittis nisl. Fusce elementum lobortis odio in scelerisque. Mauris massa leo, auctor non sem sed, tempus pharetra massa. In urna nulla, viverra quis sollicitudin non, bibendum non orci.',
  start: '2022-11-22T19:00:00.000Z',
  media: 'https://res.cloudinary.com/sonow/image/upload/v1659696227/quality/the-cure_unvg85.jpg', 
  code_user_manager: 1, 
  activeEvent: 1,
  isLoading: false,
  slug: 'the-cure'
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