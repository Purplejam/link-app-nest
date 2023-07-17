import { combineReducers } from 'redux'
import linksReducer from './linkReducer'
import errorReducer from './errorReducer'
import infoAlertReducer from './infoAlertReducer'

const rootReducer = combineReducers({
  links: linksReducer,
  error: errorReducer,
  alert: infoAlertReducer,
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

export default rootReducer
