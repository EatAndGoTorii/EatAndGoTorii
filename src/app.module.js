angular
  .module('app',
    [
      'ui.router',
      'ngMap',
      'ngStorage',
      'authModule',
      'userModule',
      'venuesModule'
    ]);

require('./app.component');
require('./app.routes');
require('./auth');
require('./user');
require('./venues');
