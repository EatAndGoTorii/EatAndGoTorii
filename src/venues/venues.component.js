import './venues.component.scss';

class VenuesComponent {
  constructor(venuesService) {
    this.venuesService = venuesService;

    this.venuesSearchResult = [];
  }


  searchVenue(ll, near, query) {
    this.venuesService.searchVenues(ll, near, query)
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
