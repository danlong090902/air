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
angular.module('starter.controllers')
  .controller('AirClinicDoctorDetailsCtrl', function ($scope,$ionicSlideBoxDelegate) {
    $scope.slideIndex = 0;

    /*debugger;*/
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
      console.log(index);

      if ($scope.slideIndex == 0){
        console.log("slide 1");
      }

      else if ($scope.slideIndex == 1){
        console.log("slide 2");
      }

    };

    $scope.activeSlide = function (index) {
      $ionicSlideBoxDelegate.slide(index);
    };
  });

/**
 * Created by salody on 17-2-18.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorsCtrl', function ($scope) {

  });

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
 * Created by salody on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicPageCtrl', function ($scope) {
    
  });

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
  .controller('AirHomePagerCtrl', ['$scope','$state',function ($scope,$state) {


  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirLoginCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.onClickLoginButton=function () {
      $state.go('airHomePage');
    };
    $scope.onClickResetPasswordButton=function () {
      $state.go('airResetPassword');
    };
    $scope.onClickRegisterUserButton=function () {
      $state.go('airRegisterUser');
    };
    $scope.onClickClinicButton=function () {
      $state.go('airClinicPage');
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
  .controller('AirResetPasswordCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.onClickCancelButton=function () {
      $state.go('airLogin');
      console.log("取消")
    }

  }]);
