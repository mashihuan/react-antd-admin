import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import App from './App'
import store from '@/store'
// import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'

import 'antd/dist/antd.css'
import '@/assets/css/reset.css'

if(process.env.NODE_ENV === 'development') {
  require('./mock')
}

ReactDOM.render(
  <ConfigProvider local={enUS}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
