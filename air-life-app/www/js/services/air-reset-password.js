
angular.module('starter.services')
//普通用户重置密码工厂
  .factory('AirResetPassword', function ($http, $q) {
    return {
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/change_password.json',
          params: params,
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
