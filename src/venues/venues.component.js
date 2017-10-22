import './venues.component.scss';

class VenuesComponent {
  constructor(venuesService) {
    this.venuesService = venuesService;
    this.venuesList = [];
  }

}

angular
  .module('venuesModule')
  .component('venues', {
    template: require('./venues.component.html'),
    controller: VenuesComponent
  });
