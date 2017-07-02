class VenuesCtrl {
  constructor() {

  }
}

angular
  .module('venuesModule')
  .component('venuesComponent', {
    selector: 'venues',
    template: require('./venues.component.html'),
    controller: VenuesCtrl
  });
