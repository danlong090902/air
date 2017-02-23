/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('airClinicHomeCtrl', ['$scope','$state','AirClinicHome',function ($scope,$state,AirClinicHome) {
    console.log($scope.userData.token);
    AirClinicHome.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        console.log(data);
      }, function () {

      });

  }]);
