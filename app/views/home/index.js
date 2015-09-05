export default {
  path: '/',

  getComponents(callback) {
    require.ensure([], require => {
      callback(null, require('./view'));
    }, 'home-view');
  },

  config: {
    title: false
  }
};
