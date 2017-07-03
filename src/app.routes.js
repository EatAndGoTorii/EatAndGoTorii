routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function routesConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      component: 'homeComponent'
    })
    .state('login', {
      url: '/login',
      component: 'authComponent'
    })
    .state('user', {
      url: '/user',
      component: 'userComponent'
    })
    .state('venues', {
      url: '/venues',
      component: 'venuesComponent'
    });

  $urlRouterProvider.otherwise('/');

}

angular
  .module('app')
  .config(routesConfig);
