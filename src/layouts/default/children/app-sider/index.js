import React, { Fragment, memo, useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import logo from '@/assets/img/logo.png'
import { AppSiderWrapper } from './style'
const { Sider } = Layout
const { SubMenu } = Menu

export default memo(function AppSider(props) {
  // 默认展开的菜单
  let defaultOpenKeys = sessionStorage.getItem('defaultOpenKeys')
  if(defaultOpenKeys) {
    defaultOpenKeys = JSON.parse(defaultOpenKeys)
  }else {
    defaultOpenKeys = []
  }

  const [selectedKeys, setSelectedKeys] = useState([])

  // 高亮导航栏
  const getActiveMenu = useCallback(route => {
    let pathname = props.location.pathname
    let activeMenu = ''
    if(route.routes) {
      route.routes.forEach(item => {
        let itemPath = item.path
        let name = pathname
        if(itemPath.includes(':')) { // 处理动态路由
          const index = itemPath.lastIndexOf('/')
          itemPath = itemPath.slice(0, index)
          const index2 = name.lastIndexOf('/')
          name = name.slice(0, index2)
        }
        if(itemPath === name) {
          activeMenu =  item.meta && item.meta.activeMenu
        }
        if(item.routes) {
          getActiveMenu(item)
        }
      })
      return activeMenu
    }
  }, [props.location.pathname])

  useEffect(() => {
    // 默然高亮菜单
    const activeMenu = getActiveMenu(props.route)
    const pathname = props.location.pathname
    setSelectedKeys([activeMenu || pathname])
  }, [getActiveMenu, props.route, props.location])

  // 获取导航icon
  const getIcon = (item) => {
    let icon = (item.routes && item.routes.length === 1) ? (item.routes && item.routes[0].meta && item.routes[0].meta.icon) : (item.meta && item.meta.icon)
    if(Icon[icon]) {
      return React.createElement(Icon[icon])
    }
    return ''
  }

  // 获取导航title
  const getTitle = (item) => {
    const title = item.routes ? (item.routes[0].meta && item.routes[0].meta.title) : (item.meta && item.meta.title)
    return title || ''
  }

  // 获取导航栏
  const getSidebar = (routes) => {
    return routes.map(item => {
      const notHiddenRoutes = (item.routes && item.routes.filter(i => !i.hidden)) || []
      return (
        <Fragment key={item.path}>
          {
            (!item.hidden) && (
              <>  
                {
                  (notHiddenRoutes.length > 1) ? (
                    <SubMenu key={item.path} icon={getIcon(item)} title={ item.meta && item.meta.title}>
                      { getSidebar(item.routes) }
                    </SubMenu>
                  ) : <Menu.Item key={item.path} icon={getIcon(item)}>{ getTitle(item) }</Menu.Item>
                }
              </>
            )
          }
        </Fragment>
      )
    })
  }

  // 点击导航栏切换路由
  const handleMenuSelect = useCallback((param) => {
    sessionStorage.setItem('defaultOpenKeys', JSON.stringify(param.keyPath))
    props.history.push(param.key)
  }, [props.history])
  
  return (
    <AppSiderWrapper>
      <Sider className="app-sider" theme="dark" collapsedWidth="48" breakpoint={props.breakpoint} collapsed={props.collapsed}>
        {false && (<NavLink to="/" className="logo">
          <img className="img" src={logo} alt="logo"/>
          <h1 className="title">买菜帮</h1>
        </NavLink>)}
        <Menu className="app-menu" mode="inline" theme="dark" selectedKeys={selectedKeys} defaultOpenKeys={defaultOpenKeys} onClick={handleMenuSelect}>
          { getSidebar(props.route.routes) }
        </Menu>
      </Sider>
    </AppSiderWrapper>
  )
})

