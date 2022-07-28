export const CHANGE_FRIENDS_ACTIVE_ITEM = 'CHANGE_FRIEND_MENU_ACTIVE_ITEM';
export const CHANGE_USERS_SEARCH_INPUT= 'CHANGE_FRIEND_SEARCH_INPUT';
export const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
export const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const GET_FOLLOWERS_ERROR = 'GET_FOLLOWERS_ERROR';
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';
export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTION';
export const GET_SUBSCRIPTIONS_ERROR = 'GET_SUBSCRIPTION_ERROR';
export const GET_SUBSCRIPTIONS_SUCCESS = 'GET_SUBSCRIPTION_SUCESS';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR'; 
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const SUBMIT_USERS_SEARCH = 'SUBMIT_USERS_SEARCH';
export const SUBMIT_USERS_SEARCH_SUCCESS = 'SUBMIT_USERS_SEARCH_SUCCESS';
export const SUBMIT_USERS_SEARCH_ERROR = 'SUBMIT_USERS_SEARCH_ERROR';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SUBMIT_SIGNUP_ERROR = 'SUBMIT_SIGNUP_ERROR';
export const SUBMIT_SIGNUP_SUCESS = 'SUBMIT_SIGNUP_SUCESS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_ERROR = 'SUBMIT_LOGIN_ERROR';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';

export const CHANGE_EVENTS_SEARCH = 'CHANGE_EVENTS_SEARCH';
export const SUBMIT_EVENTS_SEARCH = 'SUBMIT_EVENTS_SEARCH';
export const SUBMIT_EVENTS_SEARCH_SUCCESS = 'SUBMIT_EVENTS_SEARCH_SUCCESS';
export const SUBMIT_EVENTS_SEARCH_ERROR = 'SUBMIT_EVENTS_SEARCH_ERROR';

export const changeFriendsActiveItem= (activeItem) => ({
  type: CHANGE_FRIENDS_ACTIVE_ITEM,
  activeItem
});

export const changeUsersSearchInput= (newValue) => ({
  type: CHANGE_USERS_SEARCH_INPUT,
  newValue
});

export const changeLoginInputs= (inputName, newValue) => ({
  type: CHANGE_LOGIN_INPUTS,
  inputName,
  newValue,
});

export const changeSignupInputs= (inputName, newValue) => ({
  type: CHANGE_SIGNUP_INPUTS,
  inputName,
  newValue
});

export const submitSignup= () => ({
  type: SUBMIT_SIGNUP,
});

export const submitSignupSuccess= (user) => ({
  type: SUBMIT_SIGNUP_SUCESS,
  user,
});

export const submitSignupError= () => ({
  type: SUBMIT_SIGNUP_ERROR,
});


export const submitLogin= () => ({
  type: SUBMIT_LOGIN,
});

export const submitLoginSuccess = (accessToken, refreshToken, user) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  accessToken,
  refreshToken,
  user
});

export const submitLoginError= () => ({
  type: SUBMIT_LOGIN_ERROR,
});

export const submitUsersSearch= () => ({
  type: SUBMIT_USERS_SEARCH
});

export const submitUsersSearchSuccess= (friendsList) => ({
  type: SUBMIT_USERS_SEARCH_SUCCESS,
  friendsList
});

export const submitUsersSearchError= () => ({
  type: SUBMIT_USERS_SEARCH_ERROR,
});

export const getEvents= () => ({
  type: GET_EVENTS,
});

export const getEventsSuccess= (events) => ({
  type: GET_EVENTS_SUCCESS,
  events
});

export const getEventsError= () => ({
  type: GET_EVENTS_ERROR,
});

export const getFollowers= () => ({
  type: GET_FOLLOWERS,
});

export const getFollowersSucess= (followers) => ({
  type: GET_FOLLOWERS_SUCCESS,
  followers
});

export const getFollowersError= () => ({
  type: GET_FOLLOWERS_ERROR,
});

export const getSubscriptions= () => ({
  type: GET_SUBSCRIPTIONS,
});

export const getSubscriptionsSuccess= (subscriptions) => ({
  type: GET_SUBSCRIPTIONS_SUCCESS,
  subscriptions
});

export const getSubscriptionsError= () => ({
  type: GET_SUBSCRIPTIONS_ERROR,
});

export const getUsers= () => ({
  type: GET_USERS,
});

export const getUsersSuccess= (users) => ({
  type: GET_USERS_SUCCESS,
  users
});

export const getUsersError= () => ({
  type: GET_USERS_ERROR,
});



export const changeEventsSearch= (searchInput) => ({
  type: CHANGE_EVENTS_SEARCH,
  searchInput, 
});

export const submitEventsSearch= () => ({
  type: SUBMIT_EVENTS_SEARCH,
});

export const submitEventsSearchSuccess= (eventsList) => ({
  type: SUBMIT_EVENTS_SEARCH_SUCCESS,
  eventsList
});

export const submitEventsSearchError= () => ({
  type: SUBMIT_EVENTS_SEARCH_ERROR,
});