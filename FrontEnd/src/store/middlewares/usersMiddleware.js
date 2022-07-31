import axios from 'axios';

import { GET_FOLLOWERS, GET_SUBSCRIPTIONS, GET_USER, GET_USERS, SUBMIT_USERS_SEARCH, getUserError, getUserSuccess, getEventsSuccess, getEventsError } from '../actions';

const usersMiddleware = (store) => (next) => (action) => {
  
  // console.log('userMiddleware');

  if (action.type === SUBMIT_USERS_SEARCH) {

    next(action);

    const state = store.getState();

    const config = {   
      method: 'post',
      url: 'https://sonow.herokuapp.com/api/user/search', 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
      data: {
        nickname: state.users.searchInput,
      }
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

  else if (action.type === GET_USER) {

    next(action);

    const state = store.getState();
    const id = localStorage.getItem('id');

    const config = {   
      method: 'get',
      url: `https://sonow.herokuapp.com/api/user/${id}`, 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
    .then((response) => {
      console.log(response.data);
      store.dispatch(getUserSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
      store.dispatch(getUserError());
    });
  }
  
  else if (action.type === GET_USERS) {
    // console.log('get users')
    next(action);
  }
  
  else if (action.type === GET_FOLLOWERS) {
    // console.log('get followers')
    next(action);
  }
  
  else if (action.type === GET_SUBSCRIPTIONS) {
    console.log('get subscriptions')
    next(action);
  } 
  
  else {
    next(action);
  }
};

export default usersMiddleware;