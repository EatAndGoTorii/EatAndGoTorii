angular
  .module('app',
  [
    'ui.router',
    'authModule'
  ]);

require('./app.component');
require('./app.routes');
require('./auth');
