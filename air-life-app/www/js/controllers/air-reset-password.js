/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirResetPasswordCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.onClickCancelButton=function () {
      $state.go('airLogin');
      console.log("取消")
    }

  }]);
