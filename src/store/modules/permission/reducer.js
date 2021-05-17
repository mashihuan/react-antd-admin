import { Map } from 'immutable'
import * as actionTypes from './constants'

import routes from '@/router'

const defaultState = Map({
  routes: routes
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_ROUTES:
      return state.set('routes', action.routes)
    default:
      return state
  }
}

export default reducer