import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import authMiddleware from './middlewares/authMiddleware';
import reducer from './reducer';

const store = createStore(
	reducer, 
	composeWithDevTools(
    applyMiddleware(
      authMiddleware,
    ),
  ),
);

export default store;