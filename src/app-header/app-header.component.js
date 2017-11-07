import './app-header.component.scss';

class AppHeaderComponent {
  constructor($rootScope, $sessionStorage) {
    this.rootScope = $rootScope;
    this.sessionStorage = $sessionStorage;

    this.backUrl = '';
  }

  $onInit() {
    if (!!this.sessionStorage.backUrl) {
      this.backUrl = this.sessionStorage.backUrl;
    }

    this.rootScope.$on('$locationChangeStart', (event, next, current) => {
      this.sessionStorage.backUrl = this.backUrl = current;
    });
  }
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
