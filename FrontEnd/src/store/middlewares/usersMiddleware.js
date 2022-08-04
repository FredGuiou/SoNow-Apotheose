import axios from 'axios';

import { 
  GET_EVENTS_ATTENDING,
  getEventsAttendingError,
  getEventsAttendingSuccess,
  GET_FAVORITES,
  getFavoritesError,
  getFavoritesSuccess,
  GET_FOLLOWERS,
  getFollowersError,
  getFollowersSuccess,
  GET_FOLLOWED,
  getFollowedError,
  getFollowedSuccess,
  GET_USER, 
  getUserError, 
  getUserSuccess, 
  GET_USERS, 
  getUsersSuccess, 
  getUsersError,
  SUBMIT_USERS_SEARCH, 
  submitUsersSearchSuccess,
  submitUsersSearchError,
} from '../actions';

const usersMiddleware = (store) => (next) => (action) => {

  if (action.type === GET_EVENTS_ATTENDING) {

    next(action);
  
    const state = store.getState();
    const id = localStorage.getItem('id');
  
    const config = {   
      method: 'post',
      url: `http://sonow.herokuapp.com/api/event/getattend`, 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
      data: {
        user_id: id
      }
    };
  
    axios(config)
      .then((response) => {
        store.dispatch(getEventsAttendingSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(getEventsAttendingError());
      }); 
      
  }  else if (action.type === GET_FAVORITES) {
  
    next(action); 

    const state = store.getState();
    const id = localStorage.getItem('id');

    const config = {   
      method: 'post',
      url: `http://sonow.herokuapp.com/api/event/getbookmarks`, 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
      data: {
        user_id : id,
      }
    };

    axios(config)
    .then((response) => {
      store.dispatch(getFavoritesSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
      store.dispatch(getFavoritesError());
    });

  } else if (action.type === GET_FOLLOWERS) {

    next(action);

    const state = store.getState();
    const id = localStorage.getItem('id');

    const config = {   
      method: 'get',
      url: `http://sonow.herokuapp.com/api/user/${id}/followers`, 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
      .then((response) => {
        store.dispatch(getFollowersSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(getFollowersError());
      });

  } else if (action.type === GET_FOLLOWED) {

    next(action);

    const state = store.getState();
    const id = localStorage.getItem('id');

    const config = {   
      method: 'get',
      url: `http://sonow.herokuapp.com/api/user/${id}/followed`, 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        store.dispatch(getFollowedSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(getFollowedError());
      });

  } else if (action.type === GET_USER) {

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

  } else if (action.type === GET_USERS) {
    next(action);

    const state = store.getState();

    const config = {   
      method: 'get',
      url: `https://sonow.herokuapp.com/api/user`, 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
    .then((response) => {
      store.dispatch(getUsersSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
      store.dispatch(getUsersError());
    });
  
  } else if (action.type === SUBMIT_USERS_SEARCH) {

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
        store.dispatch(submitUsersSearchSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.message)
        store.dispatch(submitUsersSearchError(error.message));
      });
  
  } else {
    next(action);
  }

};

export default usersMiddleware;