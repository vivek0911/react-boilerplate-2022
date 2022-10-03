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
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@util': path.resolve(__dirname, 'src/util/'),
      '@view': path.resolve(__dirname, 'src/view/'),
    },
  },
}
