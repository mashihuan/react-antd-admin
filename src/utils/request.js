import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {}
})

instance.interceptors.request.use((config) => {
  config.headers.token = sessionStorage.getItem('token')
  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((res) => {
  if(res.message && res.message.includes('Network Error')) {
    return Promise.reject(res)
  }
  if (res.status !== 200) {
    message.error(res.data.message || 'Error')
    return res.data
  } else {
    return res.data
  }
}, (err) => {
  if(err.message && err.message.includes('Network Error')) {
    message.error('网络错误')
    return Promise.reject(err)
  }
  message.error(err.response.data.message || 'Error')
  return Promise.reject(err)
})

export default instance
