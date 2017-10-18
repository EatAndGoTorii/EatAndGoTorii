routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function routesConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('login', {
      url: '/login',
      component: 'auth'
    })
    .state('user', {
      url: '/user',
      component: 'user'
    })
    .state('venues', {
      url: '/venues',
      component: 'venues'
    });

  $urlRouterProvider.otherwise('/');

}

angular
  .module('app')
  .config(routesConfig);
