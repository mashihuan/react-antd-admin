import routes from '@/router'
import * as actionTypes from './constants'

function generateRoutes(roles) {
  let accessedRoutes = []
  if(roles.includes('admin')) {
    accessedRoutes = routes || []
  }else {
    accessedRoutes = filterRoutes(routes, roles)
  }
  return accessedRoutes
}

function filterRoutes(routerList, roleList) {
  const res = []

  routerList.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roleList, tmp)) {
      if (tmp.routes) {
        tmp.routes = filterRoutes(tmp.routes, roleList)
      }
      res.push(tmp)
    }
  })

  return res
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
} 

export const changeRoutesAction = roles => {
  const accessedRoutes = generateRoutes(roles)
  return ({
    type: actionTypes.CHANGE_ROUTES,
    routes: accessedRoutes
  })
}