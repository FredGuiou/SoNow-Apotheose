import axios from 'axios';

import { GET_FOLLOWERS, GET_SUBSCRIPTIONS, GET_USERS, SUBMIT_USERS_SEARCH, getEventsSuccess, getEventsError} from '../actions';

const usersMiddleware = (store) => (next) => (action) => {
  
  // console.log('userMiddleware');

  if (action.type === SUBMIT_USERS_SEARCH) {
    console.log('users search')
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