import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/react-antd-admin/user/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/react-antd-admin/user/info',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/react-antd-admin/user/logout',
    method: 'POST'
  })
}