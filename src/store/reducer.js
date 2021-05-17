import { combineReducers } from 'redux-immutable'

import userReducer from './modules/user'
import permissionReducer from './modules/permission'

const reducer = combineReducers({
  user: userReducer,
  permission: permissionReducer
})

export default reducer