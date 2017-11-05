import './app-header.component.scss';

class AppHeaderComponent {
  constructor() {}
}

angular
  .module('app')
  .component('appHeader', {
    template: require('./app-header.component.html'),
    bindings: {
      pageTitle: '<'
    },
    controller: AppHeaderComponent
  });
