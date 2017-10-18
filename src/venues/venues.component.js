class VenuesComponent {
  constructor(venuesService) {
    this.venuesService = venuesService;
    this.venuesList = [];
  }

  $onInit() {
    this.venuesService.searchVenues(null, 'Brooklyn bridge')
      .then(res => {
        this.venuesList = res.data.response.venues;
        console.log('venuesList: ', this.venuesList);
      });

  }
}

angular
  .module('venuesModule')
  .component('venues', {
    template: require('./venues.component.html'),
    controller: VenuesComponent
  });
