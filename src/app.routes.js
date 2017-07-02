routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
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
