//修改家庭联系人
angular.module('starter.services')
  .factory('EditPersonal', ['$http','$q', function($http,$q) {
    return {
      delete: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.patient.remove,
          params: params,
          responseType: 'json',
          timeout: 30000
        }).then(function(data) {
          deferred.resolve(data);
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  }])
