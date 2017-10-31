import './venues-details.component.scss';
import { GMAPS_KEY, GMAPS_URL } from '../../../config/env';

class VenuesDetailsComponent {
  constructor($stateParams, venuesService) {
    this.stateParams = $stateParams;
    this.venuesService = venuesService;

    this.googleMapsUrl = GMAPS_URL;
    this.googleMapsKey = GMAPS_KEY;

    this.venue = {};
  }

  $onInit() {
    this.venuesService.fetchVenuesDetails(this.stateParams.venueId)
      .then(res => {
        this.venue = res.data.response.venue;
      });

  }
}

angular
  .module('venuesModule')
  .component('venuesDetails', {
    template: require('./venues-details.component.html'),
    controller: VenuesDetailsComponent
  });
