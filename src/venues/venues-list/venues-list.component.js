import './venues-list.component.scss';
import { GMAPS_KEY, GMAPS_URL } from '../../../config/env';

class  VenuesListComponent {
  constructor($sessionStorage, GeoCoder) {
    this.sessionStorage = $sessionStorage;
    this.geoCoder = GeoCoder;

    this.googleMapsUrl = GMAPS_URL;
    this.googleMapsKey = GMAPS_KEY;
  }

  $onInit() {
    this.searchCriteria = this.sessionStorage.searchCriteria;
    this.geoCoder.geocode({address: this.searchCriteria.near})
      .then((result) => {
        this.location = {
          lat: result[0].geometry.location.lat(),
          lng: result[0].geometry.location.lng(),
        };
      });
  }
}

angular
  .module('venuesModule')
  .component('venuesList', {
    template: require('./venues-list.component.html'),
    bindings: {
      venuesList: '<'
    },
    controller: VenuesListComponent
  });
