/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirLoginCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.onClickLoginButton=function () {
      $state.go('airResetPassword');
    };
    $scope.onClickResetPasswordButton=function () {
      $state.go('airResetPassword');
    };
    $scope.onClickRegisterUserButton=function () {
      $state.go('airRegisterUser');
    }

  }]);
