//家庭联系人页面服务
angular.module('starter.services')
  .factory('Contacts', ['$http','$q', function($http,$q) {
    return {
      information: function(params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: GlobalConfig.url.api.patient.show,
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
    // var people=[{
    //   id: 0,
    //   name: '邓超',
    //   phone: '13572229938',
    //   place: '延安'
    // },
    //   {
    //     id: 1,
    //     name: '陈赫',
    //     phone: '13572229938',
    //     place: '北京'
    //   },
    //   {
    //     id: 2,
    //     name: '木林森',
    //     phone: '13572229938',
    //     place: '高新'
    //   },
    //   {
    //     id: 3,
    //     name: '王宝强',
    //     phone: '13572229938',
    //     place: '河南'
    //   },
    //
    //   {
    //     id: 4,
    //     name: '郑凯',
    //     phone: '13572229938',
    //     place: '高新'
    //   },
    //   {
    //     id: 5,
    //     name: '林心如',
    //     phone: '13572229938',
    //     place: '台湾'
    //   },];
    //
    // return {
    //   all: function() {
    //     return people;
    //   },
    //   remove: function(people) {
    //     people.splice(people.indexOf(people), 1);
    //   },
    //   get: function(peopleId) {
    //     for (var i = 0; i < people.length; i++) {
    //       if (people[i].id === parseInt(peopleId)) {
    //         return people[i];
    //       }
    //     }
    //     return null;
    //   }
    // };
  }])
