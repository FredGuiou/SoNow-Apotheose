import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import authMiddleware from './middlewares/authMiddleware';
import eventsMiddleware from './middlewares/eventsMiddleware';
import loginMiddleware from './middlewares/loginMiddleware';
import usersMiddleware from './middlewares/usersMiddleware';
import reducers from './reducers';

const store = createStore(
	reducers,
	composeWithDevTools(
    applyMiddleware(
      authMiddleware,
			loginMiddleware, 
      eventsMiddleware,
      usersMiddleware
    ),
  ),
);

export default store;