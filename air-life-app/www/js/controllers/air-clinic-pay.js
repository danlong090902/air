/**
 * Created by salody on 17-2-20.
 */
angular.module('starter.controllers')
  .controller('AirClinicPayCtrl', function ($scope) {
    $scope.button = 'a';
    $scope.activeButton = function (name) {
      $scope.button = name;
    }
  });


