const path = require('path')

const { title } = require('./src/settings')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('./src')
    },
    configure: {
      name: title
    }
  },
  devServer: {
    
  }
}