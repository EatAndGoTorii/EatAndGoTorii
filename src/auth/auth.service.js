import { CLIENT_ID, CLIENT_SECRET, TOKEN_NAME, API_URL} from '../../config/helpers';

class AuthService {
  constructor($http, $state, $location) {
    this.$http = $http;
    this.$state = $state;
    this.$location = $location;
    this.authToken = null;
  }

  loadToken() {
    const token = localStorage.getItem('access_token');
    this.authToken = token;
    return this.authToken;
  }

  logout() {
    this.authToken = null;
    localStorage.removeItem('access_token');
    this.$state.go('login');
  }

  getLoginUrl() {
    const startUrl = this.$location.absUrl();
    const url = `${API_URL}/authenticate?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${startUrl}`;
    return url;
  }
}

angular
  .module('authModule')
  .service('authService', AuthService);
