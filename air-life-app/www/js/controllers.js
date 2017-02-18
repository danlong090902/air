/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers', []);

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirLoginCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.onClickLoginButton=function () {
      $state.go('airResetPassword');
    };
    $scope.onClickResetPasswordButton=function () {
      $state.go('airResetPassword');
    };
    $scope.onClickRegisterUserButton=function () {
      $state.go('airRegisterUser');
    }

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl', function ($scope,$state) {
    $scope.onClickResetButton=function () {
      console.log("重置")
    };
    $scope.onClickCancelButton=function () {
      console.log("取消")
    }

  });

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirResetPasswordCtrl', ['$scope','$ionicHistory',function ($scope,$ionicHistory) {
    $scope.onClickCancelButton=function () {
      $ionicHistory.goBack();
      $ionicHistory.clearHistory();
      console.log("取消")
    }

  }]);
