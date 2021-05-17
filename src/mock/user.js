const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/react-antd-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = JSON.parse(config.body)
      const token = tokens[username]

      if(!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: /\/react-antd-admin\/user\/info\.*/,
    type: 'get',
    response: config => {
      const token = config.url.split('?token=')[1]
      const info = users[token]

      if(!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/react-antd-admin/user/logout',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]