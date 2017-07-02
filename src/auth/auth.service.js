import { CLIENT_ID, CLIENT_SECRET, TOKEN_NAME, AUTH_URL} from '../../config/helpers';

class AuthService {
  constructor($http, $state, $location) {
    this.$http = $http;
    this.$state = $state;
    this.$location = $location;
    this.authToken = null;
  }

  loadToken() {
    const token = localStorage.getItem(TOKEN_NAME);
    this.authToken = token;
    return this.authToken;
  }

  getToken() {
    const token = this.$location.hash().split('=')[1];;
    return token;
  }

  saveToken(token) {
     localStorage.setItem(TOKEN_NAME, token);
  }

  logout() {
    this.authToken = null;
    localStorage.removeItem(TOKEN_NAME);
    this.$state.go('login');
  }

  getLoginUrl() {
    const startUrl = this.$location.absUrl();
    const url = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${startUrl}`;
    return url;
  }
}

angular
  .module('authModule')
  .service('authService', AuthService);
