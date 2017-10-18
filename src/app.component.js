import './app.component.scss';

class AppComponent {
  constructor() {
    console.log('App component is up!');
  }
}

angular
  .module('app')
  .component('app', {
    selector: 'app',
    template: require('./app.component.html')
  })
  .component('home', {
    template: '<div layout-padding>Home page</div>',
    controller: AppComponent
  });
