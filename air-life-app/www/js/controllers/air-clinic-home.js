/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicHomeCtrl', ['$scope','$state','AirClinicHome','$rootScope',function ($scope,$state,AirClinicHome,$rootScope) {
    //绑定的$scope
    $scope.clinicArray=[];
    $scope.changeClinic=function () {
      $state.go('airClinicDepartment');
      $rootScope.hospital_id= $scope.clinicArray[$index].id;
    };

    AirClinicHome.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        console.log(data.data.result);
        $scope.clinicArray=data.data.result;
        // $rootScope.hospital_id=data.data.result.id;
      }, function () {

      });

  }]);
