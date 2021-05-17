import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  token: sessionStorage.getItem('token'),
  name: '',
  roles: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOKEN:
      return state.set('token', action.token);
    case actionTypes.CHANGE_NAME:
      return state.set('name', action.name);
    case actionTypes.CHANGE_ROLES:
      return state.set('roles', action.roles);
    default:
      return state
  }
}

export default reducer