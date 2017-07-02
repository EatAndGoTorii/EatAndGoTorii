routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'homeComponent'
    })
    .state('login', {
      url: '/login',
      component: 'authComponent'
    });

    $urlRouterProvider.otherwise('/');

}

angular
  .module('app')
  .config(routesConfig);
