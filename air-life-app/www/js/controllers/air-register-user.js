/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl',['$scope','AirRegisterUser','$state', function ($scope,AirRegisterUser,$state) {
    // $scope.onClickResetButton=function () {
    //   console.log('重置')
    // };
    $scope.onClickCancelButton=function () {
      console.log('取消')
    };

    $scope.user = {
      username: '',   //用户名
      password: '',   //密码
      sms_code:'',    //短信验证码
      invitation_code:''//邀请码
    };
    $scope.onClickRegisterButton = function () {

      AirRegisterUser.login($scope.user)
        .then(function (data) {
          console.log(data);
          // $state.go('airTabs.airHomePage');
           }, function () {

        });
    };
  }]);
