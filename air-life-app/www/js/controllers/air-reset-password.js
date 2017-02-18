/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirResetPasswordCtrl', ['$scope','$ionicHistory',function ($scope,$ionicHistory) {
    $scope.onClickCancelButton=function () {
      $ionicHistory.goBack();
      $ionicHistory.clearHistory();
      console.log("取消")
    }

  }]);
