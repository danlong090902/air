/**
 * Created by xianmengadc on 17-2-17.
 */
//修改联系人
angular.module('starter.controllers')
  .controller('AirClinicEditPersonalCtrl', ['$scope','$state','EditPersonal',function ($scope,$state,EditPersonal) {
    $scope.editPersonal = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      patient_id:$scope.userData.id
      // sessionStorage.getItem('userId'), //  用户id
    };
    $scope.message=function () {
      EditPersonal.delete($scope.contact)
        .then(function (data) {
          console.log(data,'success');
          $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };




  $scope.onClickDeletePersonal=function () {
    $scope.message();
    $state.go('airClinicFamilyRelation')
  }
  }])
