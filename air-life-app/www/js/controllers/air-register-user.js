/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl',['$scope','AirRegisterUser','$state', function ($scope,AirRegisterUser,$state) {
    $scope.onClickResetButton=function () {
      console.log('重置')
    };
    $scope.onClickCancelButton=function () {
      console.log('取消')
    };

    $scope.user = {
      username: 'xianmeng',   //用户名
      password: '123456',   //密码
      sms_code:'123456',    //短信验证码
      invitation_code:'5412957'//邀请码
    };
    $scope.onClickRegisterButton = function () {

      AirRegisterUser.login($scope.user)
        .then(function (data) {
          $scope.data = data;
          console.log($scope.data);
          // $state.go('airTabs.airHomePage');
          // sessionStorage.setItem('username', $scope.data.data.result.user.name);
          // sessionStorage.setItem('tokenID', $scope.data.data.result.token);
        }, function () {

        });
    };
  }]);
