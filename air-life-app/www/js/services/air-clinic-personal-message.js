/**
 * Created by jiangyilong on 17-2-22.
 */
//个人信息
angular.module('starter.services')
  .factory('PersonalMessage', ['$http','$q', function($http,$q) {
    return {
      showMessage: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.user.show,
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
      updateMessage: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: GlobalConfig.url.api.user.update,
          params: params,
          responseType: 'json',
          timeout: 30000
        }).then(function (data) {
          deferred.resolve(data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  }])
