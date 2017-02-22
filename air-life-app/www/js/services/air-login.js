angular.module('starter.services')
//普通用户登陆工厂
  .factory('AirLogin', function ($http, $q) {
    return {
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/authenticate.json',
          params: params,
          responseType: 'json',
          timeout: 3000
        }).then(function (data) {
          deferred.resolve(data);
          // console.log(data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    }
  });
