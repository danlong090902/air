angular.module('starter.services')
//获取诊所主页工厂
  .factory('AirClinicDepartment', function ($http, $q) {
    return {
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/show.json',
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
