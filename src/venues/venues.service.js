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

  addToFavVenues(venueId) {
    return this.likeVenue(venueId, 1);
  }

  removeFromFavVenues(venueId) {
    return this.likeVenue(venueId, 0);
  }

  likeVenue(venueId, set) {
    const url = `${API_URL}/venues/${venueId}/like`;
    const query = {
      params: {
        set,
        oauth_token: this.authService.loadToken(),
        v: API_VERSION
      }
    };
    return this.http.post(url, query.params);
  }
}

angular
  .module('venuesModule')
  .service('venuesService', VenuesService);
