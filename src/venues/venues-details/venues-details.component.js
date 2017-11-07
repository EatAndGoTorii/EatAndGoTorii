import './venues-details.component.scss';
import { GMAPS_STYLES, GMAPS_MARKER } from '../../../config/env';

class VenuesDetailsComponent {
  constructor($stateParams,  venuesService) {
    this.stateParams = $stateParams;
    this.venuesService = venuesService;

    this.venue = {};

    this.gmapsMarker = GMAPS_MARKER;
  }

  $onInit() {
    this.venuesService.fetchVenuesDetails(this.stateParams.venueId)
      .then((res) => {
        this.venue = res.data.response.venue;
      });
  }

  googleMapsStyles() {
    return GMAPS_STYLES;
  }

  likeVenueHandler(venue) {
    if (!venue.like) {
      this.venuesService.addToFavVenues(venue.id)
        .then((res) => {
          console.log(res);
        });
    } else {
      this.venuesService.removeFromFavVenues(venue.id)
        .then((res) => {
          console.log(res);
        });
    }
  }
}

angular
  .module('venuesModule')
  .component('venuesDetails', {
    template: require('./venues-details.component.html'),
    controller: VenuesDetailsComponent
  });
