/**
 * Created by xianmengadc on 17-2-17.
 */
//我的预约
angular.module('starter.controllers')
  .controller('AirClinicMyAppointmentCtrl', ['$scope','$state','MyAppointment',function ($scope,$state,MyAppointment) {
    // $scope.user=$rootScope.userData;
    console.log($scope.userData);
    $scope.noPay = {
      token:$scope.userData.token,
        // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
        // sessionStorage.getItem('userId'), //  用户id
      page: 1,       //  页码, 默认1
      count: 20       //  个数, 默认20
    };
    // $scope.noPayOrders=[];
    $scope.onNoPay=function () {
      MyAppointment.unpaid($scope.noPay)
        .then(function (data) {
          console.log(data,'success');
          $scope.noPayOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.onPay=function () {
      MyAppointment.paid($scope.noPay)
        .then(function (data) {
          console.log(data,'success');
          $scope.noPayOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.onNoPay();
    $scope.onPay();
    // $scope.onClickLoginButton = function () {
    //
    //   myAppointment.appointment($scope.user)
    //     .then(function (data) {
    //       $scope.data = data;
    //       $state.go('airTabs.airHomePage');
    //       $rootScope.userData=$scope.data.data.result;
    //       // console.log($scope.data.data.result);
    //       // console.log($scope.userData);
    //       // sessionStorage.setItem('username', $scope.data.data.result.user.name);
    //       // sessionStorage.setItem('tokenID', $scope.data.data.result.token);
    //     }, function () {
    //
    //     });
    // };
  }]);
