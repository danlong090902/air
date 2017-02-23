/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicAddressCtrl', ['$scope', '$state', function ($scope, $state) {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: $scope.addressNumber
    });
    var marker = new AMap.Marker({
      icon : './img/mark_bs.png',//24px*24px
      position: $scope.addressNumber,
      offset: new AMap.Pixel(0, 0),
      map:map

    });
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
      infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">'+$scope.addressName.name+'</div><div class="info-content">'+
        $scope.addressName.address+'<br/>',
        offset: new AMap.Pixel(0, 0)
      });
      infowindow.open(map,$scope.addressNumber);
    })

  }]);
