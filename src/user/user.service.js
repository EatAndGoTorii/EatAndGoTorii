import { TOKEN_NAME, API_URL } from '../../config/env';

class UserService {
  constructor($http, $state, $location, authService) {
    this.$http = $http;
    this.$state = $state;
    this.$location = $location;
    this.authService = authService;
  }

  getLoggedUserData() {
    return this.getUserData('self');
  }

  getUserData(userId) {
    const token = this.authService.loadToken();
    return this.$http.get(`${API_URL}/users/${userId}?oauth_token=${token}&v=20170702`);
  }

  getLoggedUserFavVenues() {
    return this.getUserFavVenues('self');
  }

  getUserFavVenues(userId) {
    const token = this.authService.loadToken();
    return this.$http.get(`${API_URL}/users/${userId}/venuelikes?oauth_token=${token}&v=20170702`);
  }
}

angular
  .module('userModule')
  .service('userService', UserService);
