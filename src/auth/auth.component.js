class AuthCtrl {
  constructor($state, $window, authService) {
    this.$state = $state;
    this.$window = $window;
    this.authService = authService;
    console.log('Auth Component');

    this.authUrl = null;
    this.isLogged = false;
  }

  login() {
    this.isLogged = true;
    this.authUrl = this.authService.getLoginUrl();
    this.$window.location.href = this.authUrl;
  }

  logout() {
    this.isLogged = false;
    console.log('logout');
  }
}

angular
  .module('authModule')
  .component('authComponent', {
    selector: 'auth-component',
    template: require('./auth.component.html'),
    controller: AuthCtrl
  });
