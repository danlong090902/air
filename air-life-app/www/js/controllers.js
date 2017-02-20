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
angular.module('starter.controllers')
  .controller('AirClinicDepartmentCtrl', function ($scope) {

  });

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorDetailsCtrl', function ($scope,$ionicSlideBoxDelegate,$state) {
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
    $scope.appointment = function () {
      $state.go('airClinicIllnessDescription');
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
angular.module('starter.controllers')
  .controller('airClinicHomeCtrl', ['$scope','$state',function ($scope,$state) {


  }]);

/**
 * Created by salody on 17-2-20.
 */
angular.module('starter.controllers')
  .controller('AirClinicIllnessDescriptionCtrl', function ($scope, $ionicActionSheet,$state) {
    $scope.showCamera = function () {
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '拍照' },
          { text: '从相册选择' }
        ],
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });
    };
    $scope.showList = function () {
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'salody' },
          { text: 'bision' },
          { text: '胡汉三' },
          { text: '廖东北' },
          { text: '222' },
          { text: '333' },
          { text: '444' },
          { text: '555' }
        ],
        cancelText: '取消',
        destructiveText: '新增',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        },
        destructiveButtonClicked: function () {
          return true;
        }
      });
    };
    $scope.onSubmit = function () {
      $state.go('airClinicPay');
    }
  });

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicMyServiceCtrl', ['$scope','$state',function ($scope,$state) {


  }]);

/**
 * Created by salody on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicPageCtrl', function ($scope) {
    
  });

/**
 * Created by salody on 17-2-20.
 */
angular.module('starter.controllers')
  .controller('AirClinicPayCtrl', function () {

  });


/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicPersonalCenterCtrl', ['$scope','$state',function ($scope,$state) {
      $scope.onClickPersonalMessage=function () {
        $state.go('airClinicPersonalMseeage')
      }
  }]);

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
      $state.go('airTabs.airHomePage');
    };
    $scope.onClickResetPasswordButton=function () {
      $state.go('airResetPassword');
    };
    $scope.onClickRegisterUserButton=function () {
      $state.go('airRegisterUser');
    };
    $scope.onClickClinicButton=function () {
      $state.go('airClinicPersonalCenter');
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
