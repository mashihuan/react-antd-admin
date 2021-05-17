import { login, getInfo, logout } from '@/api/user'
import * as actionTypes from './constants'

export const changeTokenAction = token => ({
  type: actionTypes.CHANGE_TOKEN,
  token
})

export const changeNameAction = name => ({
  type: actionTypes.CHANGE_NAME,
  name
})

export const changeRolesAction = roles => ({
  type: actionTypes.CHANGE_ROLES,
  roles
})

export const getTokenAction = userInfo => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        const token = res.data.token
        dispatch(changeTokenAction(token))
        sessionStorage.setItem('token', token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export const getUserInfoAction = () => {
  return async dispatch => {
    const token = sessionStorage.getItem('token')
    const res = await getInfo(token)
    dispatch(changeNameAction(res.data.name))
    dispatch(changeRolesAction(res.data.roles))
    return res.data.roles
  }
}

export const getLogoutAction = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      logout().then(res => {
        dispatch(changeTokenAction(''))
        dispatch(changeRolesAction([]))
        sessionStorage.clear()
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}

