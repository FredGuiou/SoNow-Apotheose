import axios from 'axios';
import { GET_EVENT, GET_EVENTS, getEventsSuccess, getEventsError, SUBMIT_EVENTS_SEARCH, submitEventsSearchSuccess, submitEventsSearchError } from '../actions';

const eventsMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_EVENTS) {

    next(action);
    const state = store.getState();

    const config = {   
      method: 'get',
      url: 'https://sonow.herokuapp.com/api/event', 
      headers: { 
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${state.user.accessToken}`
      }, 
    };

    if (!state.events.list || state.events.list.length === 0) {
      axios(config)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(getEventsSuccess(response.data));
        })
        .catch(() => {
          store.dispatch(getEventsError());
        });
    } else {
      next(action)
    }
  
  } else if (action.type === GET_EVENT) {
    
    next(action);
    const state = store.getState();
    const id = state.event.activeEvent;

    const config = {
      method: 'get',
      url: `https://sonow.herokuapp.com/api/event${id}`, 
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
  
  } else if (action.type === SUBMIT_EVENTS_SEARCH) {
    next(action);
    const state = store.getState();
    
    const config = {   
      method: 'post',
      url: 'https://sonow.herokuapp.com/api/event/search', 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${state.user.accessToken}`
      }, 
      data: {
        title : state.events.searchInput
      }
    }
  
    axios(config)
      .then((response) => {
        console.log(`submit events search success ${response.data}`);
        store.dispatch(submitEventsSearchSuccess(response.data));
      })
      .catch(() => {
        store.dispatch(submitEventsSearchError());
      });

  } else {
    next(action);
  }
};

export default eventsMiddleware;   