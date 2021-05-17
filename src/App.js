import React, { memo, Suspense } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import permission from '@/permission'
// import routes from './router'

import PageLoading from '@/components/page-loading'

const App = memo(function App(props) {

  const { routes } = useSelector(state => ({
    routes: state.getIn(['permission', 'routes'])
  }), shallowEqual)

  return (
    <Suspense fallback={<PageLoading/>}>
      { renderRoutes(routes) }
    </Suspense>
  )
})

export default permission(App)
