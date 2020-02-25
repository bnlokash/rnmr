import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { countReducer } from '../../src/redux/hooks/useCount';
import { apiReducer } from '../../src/redux/hooks/useApi';

const rootReducer = combineReducers({ 
  count: countReducer,
  api: apiReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);
