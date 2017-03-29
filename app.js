const angular = require('angular');

require('./styles/source.css');
require('./scripts/api/module');
require('./scripts/components/module');
require('./scripts/pages/module');

angular.module('App', [
    // 'App.Api',
    'App.Components',
    'App.Pages',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule'
]).config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});
