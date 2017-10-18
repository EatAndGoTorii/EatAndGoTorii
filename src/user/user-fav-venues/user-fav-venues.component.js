class UserFavVenuesComponent {
  constructor() {}
}

angular
  .module('userModule')
  .component('userFavVenues', {
    template: require('./user-fav-venues.component.html'),
    bindings: {
      userFavVenuesList: '<'
    },
    controller: UserFavVenuesComponent
  });
