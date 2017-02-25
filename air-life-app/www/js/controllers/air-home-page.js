/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirHomePagerCtrl', ['$scope','$state','AirHomePage',function ($scope,$state,AirHomePage) {
    //推荐医生
    AirHomePage.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        // console.log(data);
        $scope.doctorData=data.data.result;

      }, function () {

      });
  }]);
