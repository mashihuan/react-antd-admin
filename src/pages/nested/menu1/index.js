import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { Alert } from 'antd'

export default memo(props => {
  return (
    <>
      <Alert description={ renderRoutes(props.route.routes) } message="menu1"  type="info" />
    </>
  )
})
