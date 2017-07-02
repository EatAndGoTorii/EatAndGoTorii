class AuthCtrl {
  constructor($state, $window, $location, authService) {
    this.$state = $state;
    this.$window = $window;
    this.$location = $location;
    this.authService = authService;
    console.log('Auth Component');

    this.authUrl = null;
    this.isLogged = false;
  }

  $onInit() {
    if(!this.authService.getToken() && !this.authService.loadToken()) {
      this.isLogged = false;
    } else if(this.authService.loadToken()) {
      this.isLogged = true;
    } else {
      const authToken = this.authService.getToken();
      this.authService.saveToken(authToken);
      this.isLogged = true;
    }
  }

  login() {
    this.isLogged = true;
    this.authUrl = this.authService.getLoginUrl();
    this.$window.location.href = this.authUrl;
  }

  logout() {
    this.isLogged = false;
    this.authService.logout();
  }
}

angular
  .module('authModule')
  .component('authComponent', {
    selector: 'auth-component',
    template: require('./auth.component.html'),
    controller: AuthCtrl
  });
