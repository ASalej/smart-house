logInCtrl.$indject = ['$scope', '$uibModal', 'localStorageService'];

function logInCtrl($uibModal, localStorageService) {
    this.userName = localStorageService.get('userName');
    this.isSavedUser = this.userName ? true : false;
    
    this.register = function () {
        console.log('register');
        this.userName = 'Vasia';
        localStorageService.set('userName', 'Vasia');
    }
    
    this.logIn = function () {
        this.modal = $uibModal.open({
			templateUrl: 'scripts/components/logIn/logInTemplate.html',
			scope: this,
			backdrop: false,
			controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
				$scope.modal = $uibModalInstance;
			}]
		});
    }
    
    this.logOut = function () {
        localStorageService.set('userName', 'Vasia');
        this.isSavedUser = false;
    }
}

module.exports = logInCtrl;