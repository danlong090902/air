/**
 * Created by xianmengadc on 17-2-17.
 */
//添加联系人
angular.module('starter.controllers')
  .controller('AirClinicAddPersonalCtrl', ['$scope', '$state','AddPersonal', function ($scope, $state,AddPersonal) {

    $scope.addPersonal = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
      // sessionStorage.getItem('userId'), //  用户id
      name:'123',
      phone:'123',
      gender:'123',
      address:'123',
      identity_card:'123'
    };
    $scope.saveAddPersonal=function () {
      AddPersonal.savePersonal($scope.addPersonal)
        .then(function (data) {
          console.log(data,'success');
          // $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.onClickAddPersonalButton=function () {
      $scope.saveAddPersonal();
      $state.go('airClinicFamilyRelation')
    }

  }]);
