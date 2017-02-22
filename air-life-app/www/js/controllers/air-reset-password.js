/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirResetPasswordCtrl', ['$scope','$state','AirResetPassword',function ($scope,$state,AirResetPassword) {
    $scope.onClickCancelButton=function () {
      $state.go('airLogin');
      console.log('取消');
    };
    $scope.user = {
      username: '',   //用户名
      password: '',   //密码
      sms_code:''    //短信验证码
    };
    $scope.onClickResetButton=function () {
      AirResetPassword.login($scope.user)
        .then(function (data) {
          $scope.data = data;
          console.log($scope.data);
          // $state.go('airTabs.airHomePage');
        }, function () {

        });

    };

  }]);
