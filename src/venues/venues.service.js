import { TOKEN_NAME, API_URL, API_VERSION } from '../../config/env';

class VenuesService {
  constructor($http, authService) {
    this.http = $http;
    this.authService = authService;
  }


  searchVenues(ll, near) {
    const url = `${API_URL}/venues/search`;
    const query = {
      params: {
        ll,
        near,
        oauth_token: this.authService.loadToken(),
        v: API_VERSION
      }
    };
    return this.http.get(url, query);
  }

  fetchVenuesDetails(venueId) {
    const url = `${API_URL}/venues/${venueId}`;
    const query = {
      params: {
        oauth_token: this.authService.loadToken(),
        v: API_VERSION
      }
    };
    return this.http.get(url, query);
  }
}

angular
  .module('venuesModule')
  .service('venuesService', VenuesService);
