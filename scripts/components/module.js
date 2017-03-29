var devices = require('./devices/devices.js');
var devicesCtrl = require('./devices/devicesCtrl.js');
var menu = require('./menu/menu.js');
var nav = require('./nav/nav.js');
var logIn = require('./logIn/logIn.js');
var logInCtrl = require('./logIn/logInCtrl.js');


module.exports = angular.module('App.Components', [
    /* other components */
])
.directive('devices', devices)
.controller('devicesCtrl', devicesCtrl)
.directive('menu', menu)
.directive('nav', nav)
.directive('logIn', logIn)
.controller('logInCtrl', logInCtrl);