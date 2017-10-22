import './app.component.scss';

class AppComponent {
  constructor() {}
}

angular
  .module('app')
  .component('app', {
    selector: 'app',
    template: require('./app.component.html')
  })
  .component('home', {
    template: '<div>Home page</div>',
    controller: AppComponent
  });
