/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirHomePagerCtrl', ['$scope','$state','AirHomePage',function ($scope,$state,AirHomePage) {
    AirHomePage.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        console.log(data);

      }, function () {

      });
  }]);
