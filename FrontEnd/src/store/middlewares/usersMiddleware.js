import { GET_FAVORITES, GET_FOLLOWERS, GET_SUBSCRIPTIONS, GET_USERS, SUBMIT_USERS_SEARCH, } from '../actions';

const usersMiddleware = (store) => (next) => (action) => {
  
  console.log('userMiddleware');

  if (action.type === SUBMIT_USERS_SEARCH) {
    console.log('friend search')
    next(action);
  } 
  
  else if (action.type === GET_USERS) {
    console.log('get users')
    next(action);
  } 
  
  else if (action.type === GET_FOLLOWERS) {
    console.log('get followers')
    next(action);
  }
  else if (action.type === GET_SUBSCRIPTIONS) {
    console.log('get subscriptions')
    next(action);
  }
  else if (action.type === GET_FAVORITES) {
    console.log('get favorites')
    next(action);
  }
  else {
    next(action);
  }
};

export default usersMiddleware;