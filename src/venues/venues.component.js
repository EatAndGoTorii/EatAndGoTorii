import './venues.component.scss';

class VenuesComponent {
  constructor(venuesService) {
    this.venuesService = venuesService;
    this.venuesSearchResult = [];
  }


  searchVenue(ll, searchInput) {
    this.venuesService.searchVenues(ll, searchInput)
      .then(res => {
        return this.venuesSearchResult = res.data.response.venues;
      });
  }
}

angular
  .module('venuesModule')
  .component('venues', {
    template: require('./venues.component.html'),
    controller: VenuesComponent
  });
