var dbService = require('./dbService.js');

module.exports = angular.module('App.Api', [])
.factory('dbService', dbService);