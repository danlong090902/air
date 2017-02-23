/**
 * Created by jiangyilong on 17-2-22.
 */
//添加联系人
angular.module('starter.services')
  .factory('AddPersonal', ['$http','$q', function($http,$q) {
    return {
      savePersonal: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.patient.add,
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

