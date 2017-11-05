import './user.component.scss';

class UserComponent {
  constructor($stateParams, userService, authService) {
    this.stateParams = $stateParams;
    this.userService = userService;
    this.authService = authService;

    this.user = {};
    this.userFavVenuesList = [];
    this.userPhotoSize = '200x200';
  }

  $onInit() {
    this.userService.fetchUserData(this.stateParams.userId)
      .then((res) => {
        this.user = res.data.response.user;
      });
    this.userService.fetchUserFavVenues(this.stateParams.userId)
      .then((res) => {
        this.userFavVenuesList = res.data.response.venues.items;
      });
  }
}

angular
  .module('userModule')
  .component('user', {
    template: require('./user.component.html'),
    controller: UserComponent
  });
