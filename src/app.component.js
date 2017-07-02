import './app.component.scss';

class AppCtrl {
  constructor() {
    console.log(`App component is up!`);
  }
}

angular
  .module('app')
  .component('app', {
    selector: 'app',
    template: require('./app.component.html')
  })
  .component('homeComponent', {
    selector: 'home',
    template: '<div layout-padding>Home page</div>',
    controller: AppCtrl
  });
