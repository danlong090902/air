/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDepartmentCtrl',['$scope','AirClinicDepartment','$rootScope',function ($scope,AirClinicDepartment,$rootScope) {
    $scope.clinicDepartment=null;
    $scope.clinicSpecial=[];

    AirClinicDepartment.login({
      token:$scope.userData.token,
      hospital_id:2
    })
      .then(function (data) {
        console.log(data.data.result);
        $scope.clinicDepartment=data.data.result;
        $scope.clinicSpecial=data.data.result.specialities;
        $rootScope.addressNumber=[$scope.clinicDepartment.longitude,$scope.clinicDepartment.latitude];
        $rootScope.addressName={
          name:$scope.clinicDepartment.name,
          address:$scope.clinicDepartment.address
        };
        console.log($scope.addressNumber);
      }, function () {

      });
  }]);
