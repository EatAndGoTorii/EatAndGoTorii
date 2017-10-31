import './venues-search.component.scss';

class VenuesSearchComponent {
  constructor() {

    this.searchInput = '';
  }

  $onInit() {
    let _searchInput = sessionStorage.getItem('searchCriteria');

    if (!!_searchInput) {
      this.searchInput = _searchInput;
      this.search();
    }
  }
  search() {
    this.onSearch({ll: null, searchInput: this.searchInput});
    sessionStorage.setItem('searchCriteria', this.searchInput);
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
