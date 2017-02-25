angular.module('starter.services')
//普通用户登陆工厂
  .factory('AirHomePage', function ($http, $q) {
    return {
      //获取推荐医生
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/recommend.json',
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
