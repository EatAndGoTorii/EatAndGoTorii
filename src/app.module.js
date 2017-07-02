angular
  .module('app',
  [
    'ui.router',
    'authModule',
    'userModule'
  ]);

require('./app.component');
require('./app.routes');
require('./auth');
require('./user');
