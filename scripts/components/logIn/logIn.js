function logIn() {
    return {
        require: 'E',
        templateUrl: 'scripts/components/logIn/logIn.html',
        scope: {},
        controller: 'logInCtrl',
        controllerAs: 'user'
    }
}

module.exports = logIn;