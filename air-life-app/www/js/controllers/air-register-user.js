/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl', function ($scope,$state) {
    $scope.onClickResetButton=function () {
      console.log("重置")
    };
    $scope.onClickCancelButton=function () {
      console.log("取消")
    }

  });
