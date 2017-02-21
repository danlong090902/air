/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('airClinicAddressCtrl', ['$scope', '$state', function ($scope, $state) {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [108.84106, 34.17254]
    });
    var marker = new AMap.Marker({
      position: [108.84106, 34.17254]
    });
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
      infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">爱尔诊所后宰门诊室</div><div class="info-content">'+
        '紫薇龙腾新世界2611室<br/>',
        offset: new AMap.Pixel(0, 0)
      });
      infowindow.open(map,[108.84106, 34.17254]);
    })

  }]);
