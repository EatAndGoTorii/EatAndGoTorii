class UserComponent {
  constructor($stateParams, userService) {
    this.stateParams = $stateParams;
    this.userService = userService;

    this.user = {};
    this.userFavVenuesList = [];
    this.userPhotoSize = '200x200';
  }

  $onInit() {
    this.userService.fetchUserData(this.stateParams.userId)
      .then((res) => {
        this.user = res.data.response.user;
        console.log('user: ', this.user);
      });
    this.userService.fetchUserFavVenues(this.stateParams.userId)
      .then((res) => {
        this.userFavVenuesList = res.data.response.venues.items;
        console.log('userFavVenuesList: ', this.userFavVenuesList);
      });
  }
}

angular
  .module('userModule')
  .component('user', {
    template: require('./user.component.html'),
    controller: UserComponent
  });
