import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import equityFinder from './equity-finder'

const rootReducer = combineReducers({
  equityFinder,
  routing: routerReducer,
  form: formReducer,
})

export default rootReducer
