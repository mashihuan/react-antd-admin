const Mock = require('mockjs')
const user = require('./user')

const mocks = [
  ...user
]

for(const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}

module.exports = mocks