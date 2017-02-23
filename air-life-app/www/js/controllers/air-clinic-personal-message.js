/**
 * Created by xianmengadc on 17-2-17.
 */
//个人信息
angular.module('starter.controllers')
  .controller('AirClinicPersonalMseeageCtrl', ['$scope','$state','PersonalMessage',function ($scope,$state,PersonalMessage) {

    $scope.showPersonalMessage = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
      // sessionStorage.getItem('userId'), //  用户id
    };
    $scope.showPersonalMessage=function () {
      PersonalMessage.showMessage($scope.showPersonalMessage)
        .then(function (data) {
          console.log(data,'success');
          // $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.updatePersonalMessage = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
      // sessionStorage.getItem('userId'), //  用户id
      name:'123',
      gender:'123',
      address:'123',
      identity_card:'123'
    };
    $scope.updatePersonalMessage=function () {
      PersonalMessage.updateMessage($scope.updatePersonalMessage)
        .then(function (data) {
          console.log(data,'success');
          // $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.showPersonalMessage();
    $scope.onClickUpdatePersonalMessage=function () {
      $scope.updatePersonalMessage()
    }
  }]);
