const path = require('path')

module.exports = {
  webpack(config, _options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000,
          outputPath : 'static/assets',
          publicPath : path => `/_next/static/assets/${path}`
        }
      }
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack' }]
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      '~types': path.join(__dirname, 'types'),
      '~server': path.join(__dirname, 'server'),
      '~client': path.join(__dirname, 'client')
    }
    return config
  }
}
