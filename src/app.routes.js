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
      url: '/user/{userId}',
      component: 'user'
    })
    .state('venues', {
      url: '/venues/search',
      component: 'venues'
    })
    .state('venuesDetails', {
      url: '/venues/:venueId',
      component: 'venuesDetails'
    });

  $urlRouterProvider.otherwise('/');

}

angular
  .module('app')
  .config(routesConfig);
