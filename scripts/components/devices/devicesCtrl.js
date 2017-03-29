// devicesCtrl.$inject = [ '$scope' ];

function devicesCtrl() {
    this.devices = [
        {
            deviceName: 'Device1',
            functions: [ 'function1', 'function2', 'function3', 'function4', 'function5']
        }, {
            deviceName: 'Device2',
            functions: [ 'function1', 'function2', 'function3', 'function4', 'function5']
        }, {
            deviceName: 'Device3',
            functions: [ 'function1', 'function2', 'function3', 'function4', 'function5']
        }, {
            deviceName: 'Device4',
            functions: [ 'function1', 'function2', 'function3', 'function4', 'function6']
        }
    ];
}

module.exports = devicesCtrl;
