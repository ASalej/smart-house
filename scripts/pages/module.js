var startPage = require('./startPage/startPage.js');

module.exports = angular.module('App.Pages', [])
.directive('startPage', startPage);