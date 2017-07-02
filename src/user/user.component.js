class UserCtrl {
  constructor(userService) {
    this.userService = userService;

    this.user = {};
    this.userFavVenuesList = [];
  }

  $onInit() {
    this.user = this.userService.getLoggedUserData()
      .then(res => { this.user = res.data.response.user; console.log(this.user); });
    this.userService.getLoggedUserFavVenues()
      .then(res => { this.userFavVenuesList = res.data.response.venues.items; console.log(this.userFavVenuesList) });
  }
}

angular
  .module('userModule')
  .component('userComponent', {
    selector: 'user-component',
    template: require('./user.component.html'),
    controller: UserCtrl
  });
