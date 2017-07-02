class UserCtrl {
  constructor(userService) {
    this.userService = userService;

    this.user = {};
  }

  $onInit() {
    this.user = this.userService.getLoggedUserData()
      .then(res => { this.user = res.data.response.user; console.log(this.user); });

  }
}

angular
  .module('userModule')
  .component('userComponent', {
    selector: 'user-component',
    template: require('./user.component.html'),
    controller: UserCtrl
  });
