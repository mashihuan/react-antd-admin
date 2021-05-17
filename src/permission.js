import React, { useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { getUserInfoAction } from '@/store/modules/user/actionCreators'
import { changeRoutesAction } from '@/store/modules/permission/actionCreators'
const whiteList = ['/login'] // 不需要登录就可以看到的页面

function permission(WrappedComponent) {

  return withRouter(props => {
    const { roles } = useSelector(state => ({
      roles: state.getIn(['user', 'roles'])
    }), shallowEqual)

    const [newComponent, setNewComponent] = useState(<WrappedComponent {...props} />)
    const dispatch = useDispatch()

    const token = sessionStorage.getItem('token')
    const pathname = props.location && props.location.pathname

    const getRoles = useCallback(async() => {
      try {
        const roleList = await dispatch(getUserInfoAction())
        await dispatch(changeRoutesAction(roleList))
        setNewComponent(<WrappedComponent {...props} />)
      }catch(err) {
        setNewComponent(<Redirect to={`/login?redirect=${pathname}`} />)
      }
    }, [setNewComponent, dispatch, props, pathname])

    useEffect(() => {
      if(token) {
        if(pathname === '/login') {
          setNewComponent(<Redirect to="/" />)
        }else {
          const hasRoles = roles.length > 0
          if(hasRoles) {
            setNewComponent(<WrappedComponent {...props} />)
          }else {
            getRoles()
          }
        }
      }else {
        if(whiteList.includes(pathname)) {
          console.log(pathname, whiteList.includes(pathname))
          setNewComponent(<WrappedComponent {...props} />)
        }else {
          console.log(pathname, whiteList.includes(pathname))
          setNewComponent(<Redirect to={`/login?redirect=${pathname}`} />)
        }
      }
    }, [props, token, pathname, getRoles, roles.length, roles])

    return newComponent
  })
}

export default permission
