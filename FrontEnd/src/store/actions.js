export const CHANGE_EVENTS_SEARCH = 'CHANGE_EVENTS_SEARCH';
export const CHANGE_ACTIVE_EVENT = 'CHANGE_ACTIVE_EVENT';
export const CHANGE_FAVORITES_ACTIVE_ITEM = 'CHANGE_FAVORITES_ACTIVE_ITEM';
export const CHANGE_FRIENDS_ACTIVE_ITEM = 'CHANGE_FRIENDS_ACTIVE_ITEM';
export const CHANGE_PROFIL_ACTIVE_ITEM = 'CHANGE_PROFIL_ACTIVE_ITEM';
export const CHANGE_USERS_SEARCH_INPUT= 'CHANGE_USERS_SEARCH_INPUT';
export const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
export const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
export const GET_EVENT = 'GET_EVENT';
export const GET_EVENT_ERROR = 'GET_EVENT_ERROR';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_TAGS = 'GET_TAGS';
export const GET_TAGS_ERROR = 'GET_TAGS_ERROR';
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const GET_EVENTS_ATTENDING = 'GET_EVENTS_ATTENDING';
export const GET_EVENTS_ATTENDING_ERROR = 'GET_EVENTS_ATTENDING_ERROR';
export const GET_EVENTS_ATTENDING_SUCCESS = 'GET_EVENTS_ATTENDING_SUCCESS';
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_FAVORITES_ERROR = 'GET_FAVORITES_ERROR';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const GET_FOLLOWED = 'GET_FOLLOWED';
export const GET_FOLLOWED_ERROR = 'GET_FOLLOWED_ERROR';
export const GET_FOLLOWED_SUCCESS = 'GET_FOLLOWED_SUCCESS';
export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const GET_FOLLOWERS_ERROR = 'GET_FOLLOWERS_ERROR';
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';
export const GET_CONSULTED_USER = 'GET_CONSULTED_USER';
export const GET_CONSULTED_USER_ERROR = 'GET_CONSULTED_USER_ERROR'; 
export const GET_CONSULTED_USER_SUCCESS = 'GET_CONSULTED_USER_SUCCESS';
export const GET_USER = 'GET_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR'; 
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR'; 
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_EVENTS_SEARCH = 'SUBMIT_EVENTS_SEARCH';
export const SUBMIT_EVENTS_SEARCH_SUCCESS = 'SUBMIT_EVENTS_SEARCH_SUCCESS';
export const SUBMIT_EVENTS_SEARCH_ERROR = 'SUBMIT_EVENTS_SEARCH_ERROR';
export const SUBMIT_USERS_SEARCH = 'SUBMIT_USERS_SEARCH';
export const SUBMIT_USERS_SEARCH_SUCCESS = 'SUBMIT_USERS_SEARCH_SUCCESS';
export const SUBMIT_USERS_SEARCH_ERROR = 'SUBMIT_USERS_SEARCH_ERROR';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SUBMIT_SIGNUP_ERROR = 'SUBMIT_SIGNUP_ERROR';
export const SUBMIT_SIGNUP_SUCESS = 'SUBMIT_SIGNUP_SUCESS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_ERROR = 'SUBMIT_LOGIN_ERROR';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';

export const changeActiveEvent= (id) => ({
  type: CHANGE_ACTIVE_EVENT,
  id
});

export const changeFavoritesActiveItem= (activeItem) => ({
  type: CHANGE_FAVORITES_ACTIVE_ITEM,
  activeItem
});

export const changeFriendsActiveItem= (activeItem) => ({
  type: CHANGE_FRIENDS_ACTIVE_ITEM,
  activeItem
});

export const changeProfilActiveItem= (activeItem) => ({
  type: CHANGE_PROFIL_ACTIVE_ITEM,
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

export const submitUsersSearchSuccess= (users) => ({
  type: SUBMIT_USERS_SEARCH_SUCCESS,
  users
});

export const submitUsersSearchError= () => ({
  type: SUBMIT_USERS_SEARCH_ERROR,
});

export const getEvent= () => ({
  type: GET_EVENT,
});

export const getEventSuccess= (event) => ({
  type: GET_EVENT_SUCCESS,
  event
});

export const getEventError= () => ({
  type: GET_EVENT_ERROR,
});

export const getEventsAttending= () => ({
  type: GET_EVENTS_ATTENDING,
});

export const getEventsAttendingSuccess= (events) => ({
  type: GET_EVENTS_ATTENDING_SUCCESS,
  events
});

export const getEventsAttendingError= () => ({
  type: GET_EVENTS_ATTENDING_ERROR,
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

export const getFavorites= () => ({
  type: GET_FAVORITES,
});

export const getFavoritesSuccess= (events) => ({
  type: GET_FAVORITES_SUCCESS,
  events
});

export const getFavoritesError= () => ({
  type: GET_FAVORITES_ERROR,
});

export const getFollowed= () => ({
  type: GET_FOLLOWED
});

export const getFollowedSuccess= (followed) => ({
  type: GET_FOLLOWED_SUCCESS,
  followed
});

export const getFollowedError= () => ({
  type: GET_FOLLOWED_ERROR,
});

export const getFollowers= () => ({
  type: GET_FOLLOWERS,
});

export const getFollowersSuccess= (followers) => ({
  type: GET_FOLLOWERS_SUCCESS,
  followers
});

export const getFollowersError= () => ({
  type: GET_FOLLOWERS_ERROR,
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

export const getTags= () => ({
  type: GET_TAGS,
});

export const getTagsSuccess= (tags) => ({
  type: GET_TAGS_SUCCESS,
  tags
});

export const getTagsError= () => ({
  type: GET_TAGS_ERROR,
});

export const getUser= () => ({
  type: GET_USER,
});

export const getUserSuccess= (user) => ({
  type: GET_USER_SUCCESS,
  user
});

export const getUserError= () => ({
  type: GET_USER_ERROR,
});

export const getConsultedUser= () => ({
  type: GET_CONSULTED_USER,
});

export const getConsultedUserSuccess= (consultedUser) => ({
  type: GET_CONSULTED_USER_SUCCESS,
  consultedUser
});

export const getConsultedUserError= () => ({
  type: GET_CONSULTED_USER_ERROR,
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

export const logout = () => ({
  type: LOGOUT,
});