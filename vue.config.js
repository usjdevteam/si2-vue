module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    host: 'localhost'
  }
};
