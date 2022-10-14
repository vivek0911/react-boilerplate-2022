const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@asset': path.resolve(__dirname, 'src/asset/'),
      '@atom': path.resolve(__dirname, 'src/component/atom'),
      '@molecule': path.resolve(__dirname, 'src/component/molecule'),
      '@organism': path.resolve(__dirname, 'src/component/organism'),
      '@template': path.resolve(__dirname, 'src/component/template'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@util': path.resolve(__dirname, 'src/util/'),
      '@view': path.resolve(__dirname, 'src/view/'),
    },
  },
}
