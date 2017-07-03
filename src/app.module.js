angular
  .module('app',
    [
      'ui.router',
      'authModule',
      'userModule',
      'venuesModule'
    ]);

require('./app.component');
require('./app.routes');
require('./auth');
require('./user');
require('./venues');
