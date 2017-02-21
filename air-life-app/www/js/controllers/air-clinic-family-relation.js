/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicFamilyRelationCtrl', ['$scope','$state',function ($scope,$state) {
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
$scope.onClickAddPersonal=function () {
  $state.go('airClinicAddPersonal')
};
$scope.onClickEditPersonal=function () {
  $state.go('airClinicEditPersonal')
}
  }]);
