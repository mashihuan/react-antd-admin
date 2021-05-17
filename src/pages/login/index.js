import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTokenAction } from '@/store/modules/user/actionCreators'

import { LoginWrapper } from './style'
import { Col, Row, Form, Input, Button } from 'antd'

const { title } = require('../../settings')

export default memo(function Login(props) {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const validatorUsername = async (_, value) => {
    const valid_map = ['admin', 'editor']
    if(valid_map.includes(value)) {
      return Promise.resolve()
    }else {
      return Promise.reject('Please enter the correct user name')
    }
  }

  const handleLogin = async userInfo => {
    setLoading(true)
    dispatch(getTokenAction(userInfo)).then(res => {
      setLoading(false)
      const search = props.location.search
      let redirect = ''
      if(search) {
        redirect = search.split('redirect=')[1]
      }
      
      if(redirect) {
        props.history.push(redirect)
      } else {
        props.history.push('/')
      }
    }).catch(err => {
      setLoading(false)
      console.log(err)
    })
    
  }

  return (
    <LoginWrapper>
      <Row justify="center">
        <Col xs={20} sm={14} md={12} lg={10} xl={8} xxl={5}>
          <h1 className="title">{title}</h1>
          <Form
            onFinish={handleLogin}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, validator: validatorUsername}]}
            >
              <Input placeholder="账号" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter password' }]}
            >
              <Input.Password placeholder="密码" autoComplete="off" />
            </Form.Item>

            <Form.Item>
              <Button className="login-btn" type="primary" htmlType="submit" loading={loading}>
                登录
              </Button>
            </Form.Item>

            <Form.Item >
              <p>Username：admin，Password：any</p>
              <p>Username：editor，Password：any</p>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </LoginWrapper>
  )
})
