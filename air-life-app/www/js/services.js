
angular.module('starter.services', []);

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


/**
 * Created by xianmengadc on 17-2-17.
 */

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
  }])


angular.module('starter.services')
//获取医院列表工厂
  .factory('AirClinicHome', function ($http, $q) {
    return {
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/all.json',
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

angular.module('starter.services')
//普通用户登陆工厂
  .factory('AirHomePage', function ($http, $q) {
    return {
      login: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url:  'http://www.bigbug.tech:8080/hospital-appointment-api/api/ad/recommend.json',
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
