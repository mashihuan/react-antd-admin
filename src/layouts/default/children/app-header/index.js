import React, { memo, useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { MID_SCREEN_WIDTH } from '@/common/config'
import { getLogoutAction } from '@/store/modules/user/actionCreators'

import AppSider from '../app-sider'
import { 
  Button,
  Drawer
} from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { Layout } from 'antd'
import { AppHeaderWrapper } from './style'
const { Header } = Layout

export default memo(function AppHeader(props) {
  const { switchCollapsed } = props
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
 

  useEffect(() => {
    if(props.windowWidth >= MID_SCREEN_WIDTH) {
      setVisible(false)
    }
  }, [props.windowWidth])

  const handleChangeVisible = useCallback(flag => {
    switchCollapsed() // 中屏时切换sider
    if(props.windowWidth < MID_SCREEN_WIDTH) { // 小屏时切换抽屉
      setVisible(flag)
    }
  }, [switchCollapsed, props.windowWidth])

  const handleLogout = async handleLogout => {
    await dispatch(getLogoutAction())
    props.history.push('/login')
  }

  return (
    <AppHeaderWrapper>
      <Header className="app-header">
        <div className="left">
          <div className="icons">
            {
              visible ? <MenuFoldOutlined onClick={() => handleChangeVisible(false)} />
              : <MenuUnfoldOutlined onClick={() => handleChangeVisible(true)} /> 
            }
          </div>
        </div>
        <div className="right">
          <span>食屎不忘拉屎人</span>
          <Button type="primary" size="small" onClick={e => handleLogout()}>退出</Button>
        </div>
      </Header>
      <Drawer
        placement='left'
        closable={false}
        onClose={() => handleChangeVisible(false)}
        visible={visible}
      >
        <AppSider {...props} />
      </Drawer>
    </AppHeaderWrapper>
  )
})
