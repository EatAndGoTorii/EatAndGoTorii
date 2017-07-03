import { TOKEN_NAME, API_URL } from '../../config/env';

class VenuesService {
  constructor($http, $state, $location, authService) {
    this.$http = $http;
    this.$state = $state;
    this.$location = $location;
    this.authService = authService;
  }

  searchVenues(ll, near) {
    const token = this.authService.loadToken();
    if (ll) {
      return this.$http.get(`${API_URL}/venues/search?ll=${ll}&oauth_token=${token}&v=20170702`);
    } else if (near) {
      return this.$http.get(`${API_URL}/venues/search?near=${near}&oauth_token=${token}&v=20170702`);
    }
  }
}

angular
  .module('venuesModule')
  .service('venuesService', VenuesService);
