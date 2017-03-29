function devices() {
    return {
        require: 'E',
        templateUrl: 'scripts/components/devices/devices.html',
        scope: {},
        controller: 'devicesCtrl',
        controllerAs: 'vm'
    }
}

module.exports = devices;