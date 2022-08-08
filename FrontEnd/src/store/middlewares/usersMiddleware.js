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

    let url = `https://sonow.herokuapp.com/api/event/getattend/`;
  
    const config = {   
      method: 'post',
      url: url + '?nocache=' + new Date().getTime(), 
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
        console.log(error.message);
        store.dispatch(getEventsAttendingError());
      }); 
      
  }  else if (action.type === GET_FAVORITES) {
  
    next(action); 

    const state = store.getState();
    const id = localStorage.getItem('id');

    let url = `https://sonow.herokuapp.com/api/event/getbookmarks/`;

    const config = {   
      method: 'post',
      url: url + '?nocache=' + new Date().getTime(),
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
      console.log(error.message);
      store.dispatch(getFavoritesError());
    });

  } else if (action.type === GET_FOLLOWERS) {

    next(action);

    const state = store.getState();
    const id = localStorage.getItem('id');

    let url = `https://sonow.herokuapp.com/api/user/${id}/followers/`;

    const config = {   
      method: 'get',
      url: url + '?nocache=' + new Date().getTime(), 
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
        console.log(error.message);
        store.dispatch(getFollowersError());
      });

  } else if (action.type === GET_FOLLOWED) {

    next(action);

    const state = store.getState();
    const id = localStorage.getItem('id');

    let url = `https://sonow.herokuapp.com/api/user/${id}/followed/`;

    const config = {   
      method: 'get',
      url: url + '?nocache=' + new Date().getTime(), 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
      .then((response) => {
        store.dispatch(getFollowedSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.message);
        store.dispatch(getFollowedError());
      });

  } else if (action.type === GET_USER) {

    next(action);

    const state = store.getState();
    const id = localStorage.getItem('id');

    let url = `https://sonow.herokuapp.com/api/user/${id}/`;

    const config = {   
      method: 'get',
      url: url + '?nocache=' + new Date().getTime(), 
      headers: { 
        'content-type': 'application/json; charset=utf-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${state.user.accessToken}`
      }, 
    };

    axios(config)
    .then((response) => {

      store.dispatch(getUserSuccess(response.data));
    })
    .catch((error) => {
      console.log(error.message);
      store.dispatch(getUserError());
    });

  } else if (action.type === GET_USERS) {
    next(action);

    const state = store.getState();

    let url = `https://sonow.herokuapp.com/api/user/`;

    const config = {   
      method: 'get',
      url: url + '?nocache=' + new Date().getTime(), 
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
      console.log(error.message);
      store.dispatch(getUsersError());
    });
  
  } else if (action.type === SUBMIT_USERS_SEARCH) {

    next(action);

    const state = store.getState();

    let url = `https://sonow.herokuapp.com/api/user/search/`;

    const config = {   
      method: 'post',
      url: url + '?nocache=' + new Date().getTime(), 
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