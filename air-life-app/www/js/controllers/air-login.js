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
      username: 'xianmeng',
      password: '123456'
    };
    $scope.onClickLoginButton = function () {

      AirLogin.login($scope.user)
        .then(function (data) {
          $scope.data = data;
          $state.go('airTabs.airHomePage');
          $rootScope.userData=data.data.result;
          // console.log($scope.data.data.result);
          //保存数据到本地
          // console.log($scope.userData);
          sessionStorage.setItem('token', data.data.result.token);
          sessionStorage.setItem('id', data.data.result.id);
          sessionStorage.setItem('username', data.data.result.username);

        }, function () {

        });
    };
  }]);
