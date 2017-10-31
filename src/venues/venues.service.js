import { TOKEN_NAME, API_URL, API_VERSION } from '../../config/env';

class VenuesService {
  constructor($http, authService) {
    this.http = $http;
    this.authService = authService;
  }


  searchVenues(ll, near, query) {
    const url = `${API_URL}/venues/search`;
    const queryObj = {
      params: {
        ll,
        near,
        query,
        oauth_token: this.authService.loadToken(),
        v: API_VERSION
      }
    };
    return this.http.get(url, queryObj);
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
