/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorDetailsCtrl',['$scope','$ionicSlideBoxDelegate','$state', function ($scope,$ionicSlideBoxDelegate,$state) {
    $scope.slideIndex = 0;

    /*debugger;*/
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
      console.log(index);

      if ($scope.slideIndex == 0){
        console.log("slide 1");
      }

      else if ($scope.slideIndex == 1){
        console.log("slide 2");
      }

    };

    $scope.activeSlide = function (index) {
      $ionicSlideBoxDelegate.slide(index);
    };
    $scope.appointment = function () {
      $state.go('airClinicIllnessDescription');
    };
  }]);