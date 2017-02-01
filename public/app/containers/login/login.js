angular.module('ChatApp')
.component('loginComp', {
  templateUrl: 'app/containers/login/login.html',
  controller: LoginCompCtrl,
  controllerAs: 'loginComp'
});

function LoginCompCtrl($scope, $state, UserService) {
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.userLogin = function() {
    console.log($scope.user);
    UserService.login($scope.user).then(function(user) {
      console.log("login response:", user);
      if (user !== false) {
        $state.go('home');
      }
    });
  };
}

LoginCompCtrl.$inject = ['$scope', '$state', 'UserService'];
