import { createStore, combineReducers } from 'redux'
import { countReducer } from 'src/redux/hooks/useCount'

const rootReducer = combineReducers({ 
  count: countReducer
})

export default createStore(rootReducer);
