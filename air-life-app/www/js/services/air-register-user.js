/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl',['$scope', function ($scope) {
    $scope.onClickResetButton=function () {
      console.log('重置')
    };
    $scope.onClickCancelButton=function () {
      console.log('取消')
    }

  }]);
