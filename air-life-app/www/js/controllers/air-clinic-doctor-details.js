/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorDetailsCtrl', function ($scope,$ionicSlideBoxDelegate,$state) {

    $scope.appointment = function () {
      $state.go('airClinicIllnessDescription');
    };
    $scope.tab = {
     current: 0
   };
    $scope.activeTab = function (index) {
      $scope.tab.current = index;
    }
  });
