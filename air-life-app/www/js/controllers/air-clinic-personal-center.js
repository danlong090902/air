/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicPersonalCenterCtrl', ['$scope','$state',function ($scope,$state) {
      $scope.onClickPersonalMessage=function () {
        $state.go('airClinicPersonalMseeage')
      }
  }]);
