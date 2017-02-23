/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDepartmentCtrl',['$scope','AirClinicDepartment',function ($scope,AirClinicDepartment) {
    console.log($scope.userData.token);
    AirClinicDepartment.login({
      token:$scope.userData.token,
      hospital_id:2
    })
      .then(function (data) {
        console.log(data);
      }, function () {

      });
  }]);
