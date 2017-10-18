class UserFavVenuesItemComponent {
  constructor() {}

  $onInit() {
    console.log('userFavVenuesItem: ', this.userFavVenuesItem);
  }
}

angular
  .module('userModule')
  .component('userFavVenuesItem', {
    template: require('./user-fav-venues-item.component.html'),
    bindings: {
      userFavVenuesItem: '<'
    },
    controller: UserFavVenuesItemComponent
  });
