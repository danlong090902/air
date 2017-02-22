/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirLoginCtrl', ['$scope', '$state', 'AirLogin','$rootScope', function ($scope, $state, AirLogin,$rootScope) {
    // $scope.onClickLoginButton=function () {
    //   $state.go('airTabs.airHomePage');
    // };
    $scope.onClickResetPasswordButton = function () {
      $state.go('airResetPassword');
    };
    $scope.onClickRegisterUserButton = function () {
      $state.go('airRegisterUser');
    };

    $scope.user = {
      username: 'xianmeng123',
      password: '123456'
    };
    $scope.onClickLoginButton = function () {

      AirLogin.login($scope.user)
        .then(function (data) {
          $scope.data = data;
          $state.go('airTabs.airHomePage');
          $rootScope.user=$scope.data.result;
          console.log($rootScope.user);
          // sessionStorage.setItem('username', $scope.data.data.result.user.name);
          // sessionStorage.setItem('tokenID', $scope.data.data.result.token);
        }, function () {

        });
    };
  }]);
