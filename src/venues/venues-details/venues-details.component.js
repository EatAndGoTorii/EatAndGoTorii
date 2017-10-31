import './venues-details.component.scss';

class VenuesDetailsComponent {
  constructor($stateParams, venuesService) {
    this.stateParams = $stateParams;
    this.venuesService = venuesService;

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
