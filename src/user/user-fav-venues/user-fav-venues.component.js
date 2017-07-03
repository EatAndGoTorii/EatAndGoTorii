class UserFavVenuesCtrl {
  constructor() {}
}

angular
  .module('userModule')
  .component('userFavVenuesComponent', {
    selector: 'user-fav-venues-component',
    template: require('./user-fav-venues.component.html'),
    binding: {
      userFavVenuesList: '<'
    },
    controller: UserFavVenuesCtrl
  });

