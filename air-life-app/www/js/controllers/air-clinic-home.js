/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicHomeCtrl', ['$scope','$state','AirClinicHome',function ($scope,$state,AirClinicHome) {
    //绑定的$scope
    $scope.clinicArray=[];

    AirClinicHome.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        console.log(data.data.result);
        $scope.clinicArray=data.data.result;
      }, function () {

      });

  }]);
