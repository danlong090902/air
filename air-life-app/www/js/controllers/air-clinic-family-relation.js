/**
 * Created by xianmengadc on 17-2-17.
 */

//家庭联系人
angular.module('starter.controllers')
  .controller('AirClinicFamilyRelationCtrl', ['$scope','$state','Contacts',function ($scope,$state,Contacts) {
    $scope.contact = {
      token:$scope.userData.token,
        // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id
        // sessionStorage.getItem('userId'), //  用户id
    };
    $scope.message=function () {
      Contacts.information($scope.contact)
        .then(function (data) {
          console.log(data,'success');
          $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.message();

$scope.onClickAddPersonal=function () {
  $state.go('airClinicAddPersonal')
};
$scope.onClickEditPersonal=function () {
  $state.go('airClinicEditPersonal')
};


$scope.memberArr=[
  {
    name:'老司机',
    phone:'12345678901',
    address:'你猜'
  }, {
    name:'老司机',
    phone:'12345678901',
    address:'你猜'
  }, {
    name:'老司机',
    phone:'12345678901',
    address:'你猜'
  }, {
    name:'老司机',
    phone:'12345678901',
    address:'你猜'
  }, {
    name:'老司机',
    phone:'12345678901',
    address:'你猜'
  }, {
    name:'老司机',
    phone:'12345678901',
    address:'你猜'
  }
];

  }]);



