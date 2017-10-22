import './venues-search.component.scss';

class VenuesSearchComponent {
  constructor(venuesService) {
    this.venuesService = venuesService;

    this.searchInput = 'Warsaw';
  }

  searchVenues() {
    this.venuesService.searchVenues(null, this.searchInput)
      .then(res => {
        return this.venuesList = res.data.response.venues;
      });
  }
}

angular
  .module('venuesModule')
  .component('venuesSearch', {
    template: require('./venues-search.component.html'),
    controller: VenuesSearchComponent
  });
