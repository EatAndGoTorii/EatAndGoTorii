import './venues-search.component.scss';

class VenuesSearchComponent {
  constructor($sessionStorage) {
    this.sessionStorage = $sessionStorage;
    this.searchCriteria = {
      ll: null,
      near: '',
      query: 'piwo'
    };
  }

  $onInit() {
    if (!!this.sessionStorage.searchCriteria) {
      this.searchCriteria = this.sessionStorage.searchCriteria;
      this.search();
    }
  }

  search() {
    this.onSearch({ll: null, near: this.searchCriteria.near, query: this.searchCriteria.query});
    this.sessionStorage.searchCriteria = this.searchCriteria;
  }

}

angular
  .module('venuesModule')
  .component('venuesSearch', {
    template: require('./venues-search.component.html'),
    controller: VenuesSearchComponent,
    bindings: {
      onSearch: '&'
    }
  });
