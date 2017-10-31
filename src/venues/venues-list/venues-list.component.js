import './venues-list.component.scss';

class  VenuesListComponent {
  constructor() {}
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
