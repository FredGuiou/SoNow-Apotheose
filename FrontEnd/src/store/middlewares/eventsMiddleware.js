import axios from 'axios';
import { GET_EVENTS, getEventsSuccess, getEventsError } from '../actions';

const eventsMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_EVENTS) {
    console.log('eventsMiddleware');
    next(action);

    const state = store.getState();

    const config = {   
      method: 'get',
      url: 'https://sonow.herokuapp.com/api/event', 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        store.dispatch(getEventsSuccess(response.data));
      })
      .catch(() => {
        store.dispatch(getEventsError());
      });

  }
  else {
    next(action);
  }
};

export default eventsMiddleware; 