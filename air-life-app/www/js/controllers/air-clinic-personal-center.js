/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicPersonalCenterCtrl', ['$scope','$state',function ($scope,$state,myAppointment) {
      $scope.onClickPersonalMessage=function () {
        $state.go('airClinicPersonalMseeage')
      };
      $scope.onClickMyAppointment=function () {
        $state.go('airClinicMyAppointment')
      };
      $scope.onClickFamilyRelation=function () {
        $state.go('airClinicFamilyRelation')
      };
      $scope.onClickResetPassword=function () {
        $state.go('airResetPassword')
      };
      $scope.onClickLogout=function () {
        $state.go('airLogin')
      }
  }]);
