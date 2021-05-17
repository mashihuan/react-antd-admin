import React, { memo, Suspense, useCallback, useEffect, useState } from 'react'
import { renderRoutes } from 'react-router-config'

import { LG_SCREEN_WIDTH } from '@/common/config'
import { debounce } from '@/utils'

import { Layout } from 'antd'
import AppSider from './children/app-sider'
import AppHeader from './children/app-header'
import { DefaultLayoutWrapper } from './style'
import PageLoading from '@/components/page-loading'
const { Content } = Layout

export default memo(function DefaultLayout(props) {
  const [windowWidth, setWindowWidth] = useState(() => document.body.clientWidth)
  const [collapsed, setCollapsed] = useState(() => props.windowWidth > LG_SCREEN_WIDTH)

  useEffect(() => {
    const resizeHandler = debounce(handleWindowResize)
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const handleWindowResize = (e) =>{
    const width = document.body.clientWidth
    setWindowWidth(width)
    setCollapsed(width < LG_SCREEN_WIDTH)
  }

  const switchCollapsed = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  return (
    <DefaultLayoutWrapper collapsed={collapsed}>
      <Layout className="app-layout">
        {/* logo & 侧边栏 */}
        <div className="app-sider-wrap">
          <AppSider {...props} breakpoint='lg' windowWidth={windowWidth} collapsed={collapsed} />
        </div>
        <Layout className="app-main">
          {/* 右侧header */}
          <AppHeader {...props} windowWidth={windowWidth} switchCollapsed={switchCollapsed} />
          {/* 主内容区域 */}
          <Content className="app-content">
            <Suspense fallback={<PageLoading/>}>
              { renderRoutes(props.route.routes) }
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </DefaultLayoutWrapper>
  )
})