
angular.module('starter.services')
//普通用户注册工厂
  .factory('AirRegisterUser', function ($http, $q) {
    return {
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/register.json',
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
