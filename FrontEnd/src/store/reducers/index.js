import { combineReducers } from 'redux';

import eventsReducer from './events';
import eventReducer from './event';
import consultedUserReducer from './consultedUser';
import userReducer from './user';
import usersReducer from './users';
import tagsReducer from './tags';

const rootReducer = combineReducers({
  event: eventReducer,
  events: eventsReducer,
  consultedUser : consultedUserReducer,
  tags: tagsReducer,
  user: userReducer,
  users: usersReducer
});

export default rootReducer;