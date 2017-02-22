/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirLoginCtrl', ['$scope', '$state', 'AirLogin', function ($scope, $state, AirLogin) {
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
      username: 'admin',
      password: '111111'
    };
    $scope.onClickLoginButton = function () {

      AirLogin.login({username: $scope.user.username, password: $scope.user.password})
        .then(function (data) {
          $scope.data = data;
          console.log($scope.data);
          $state.go('airTabs.airHomePage');
          // sessionStorage.setItem('username', $scope.data.data.result.user.name);
          // sessionStorage.setItem('tokenID', $scope.data.data.result.token);
        }, function () {

        });
    };
  }]);
