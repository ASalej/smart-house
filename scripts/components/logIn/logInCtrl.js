logInCtrl.$indject = ['$scope', '$uibModal', 'localStorageService'];

function logInCtrl($uibModal, localStorageService, dbService) {
    this.userName = localStorageService.get('userName');
    this.isSavedUser = this.userName ? true : false;
    
    this.register = function () {
        var self = this;
        this.modal = $uibModal.open({
			templateUrl: 'scripts/components/logIn/registerModalTmpl.html',
			backdrop: true,
			controller: ['$scope', '$uibModalInstance', 'dbService', function ($scope, $uibModalInstance, dbService) {
                $scope.modal = $uibModalInstance;
                $scope.user = {
                    login: '',
                    password: ''
				};
				$scope.setUserData = function () {
				    if ($scope.user.login && $scope.user.password && $scope.user.login !== '' && $scope.user.password != '') {
                        self.isSavedUser = true;
                        self.userName = $scope.user.login;
                        dbService.setUserData($scope.user.login, $scope.user.password);
                        localStorageService.set('userName', $scope.user.login);
                        $scope.modal.close(); 
				    } else {
				        $scope.errorLogin = true;
				        $scope.errorLoginMessage = 'Invalid login or password';
				    }
				}
			}]
		});
    }
    
    this.logIn = function () {
        var self = this;
        this.modal = $uibModal.open({
			templateUrl: 'scripts/components/logIn/logInModalTmpl.html',
			backdrop: true,
			controller: ['$scope', '$uibModalInstance', 'dbService', function ($scope, $uibModalInstance, dbService) {
				$scope.modal = $uibModalInstance;
				$scope.user = {
				    login: '',
				    password: ''
				};
				$scope.checkUserData = function () {
				    if(dbService.isUserExist($scope.user.login, $scope.user.password)) {
				        self.isSavedUser = true;
				        self.userName = $scope.user.login;
				        localStorageService.set('userName', $scope.user.login);
				        $scope.modal.close();
				    } else {
				        $scope.errorLogin = true;
				        $scope.errorLoginMessage = 'Incorrect login or password';
				    }
				}
			}]
		});
    }
    
    this.logOut = function () {
        localStorageService.set('userName', null);
        this.isSavedUser = false;
    }
}

module.exports = logInCtrl;