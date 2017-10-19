import { TOKEN_NAME, API_URL, API_VERSION } from '../../config/env';

class UserService {
  constructor($http, authService) {
    this.http = $http;
    this.authService = authService;
  }

  fetchUserData(userId) {
    const token = this.authService.loadToken();
    const url = `${API_URL}/users/${userId}`;
    const query = {
      params: {
        oauth_token: token,
        v: API_VERSION
      }
    };
    return this.http.get(url, query);
  }

  fetchUserFavVenues(userId) {
    const token = this.authService.loadToken();
    const url = `${API_URL}/users/${userId}/venuelikes`;
    const query = {
      params: {
        oauth_token: token,
        v: API_VERSION
      }
    };
    return this.http.get(url, query);
  }
}

angular
  .module('userModule')
  .service('userService', UserService);
