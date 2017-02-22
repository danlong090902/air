angular.module('starter.services')
// 我的预约页面服务
  .factory('MyAppointment', ['$http','$q',function($http, $q) {
    return {
      unpaid: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.order.normalUserUnpaid,
          params: params,
          responseType: 'json',
          timeout: 30000
        }).then(function(data) {
          deferred.resolve(data);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      },
      paid: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.order.normalUserPaid,
          params: params,
          responseType: 'json',
          timeout: 30000
        }).then(function(data) {
          deferred.resolve(data);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      },
    };
  }]);
