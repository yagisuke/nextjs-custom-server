const path = require('path')

module.exports = {
  webpack(config, _options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~types': path.join(__dirname, 'types'),
      '~server': path.join(__dirname, 'server'),
      '~client': path.join(__dirname, 'client')
    }
    return config
  }
}
