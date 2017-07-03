class VenuesCtrl {
  constructor(venuesService) {
    this.venuesService = venuesService;
    this.venuesList = [];
  }

  $onInit() {
    this.venuesService.searchVenues(null, 'Palac kultury')
      .then(res => {
        this.venuesList = res.data.response.venues;
        console.log(this.venuesList);
      });

  }
}

angular
  .module('venuesModule')
  .component('venuesComponent', {
    selector: 'venues',
    template: require('./venues.component.html'),
    controller: VenuesCtrl
  });
