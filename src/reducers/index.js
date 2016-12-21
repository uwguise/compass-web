import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import equityFinder from './equity-finder'
import relations from './relations'

const rootReducer = combineReducers({
  equityFinder,
  relations,
  routing: routerReducer,
  form: formReducer,
})

export default rootReducer
