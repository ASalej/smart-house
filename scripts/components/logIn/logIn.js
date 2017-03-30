function logIn() {
    return {
        require: 'E',
        templateUrl: 'scripts/components/logIn/logIn2.html',
        scope: {},
        controller: 'logInCtrl',
        controllerAs: 'user'
    }
}

module.exports = logIn;