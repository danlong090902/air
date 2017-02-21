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
  .controller('AirClinicDepartmentCtrl',[ '$scope',function ($scope) {

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorDetailsCtrl',['$scope','$ionicSlideBoxDelegate','$state', function ($scope,$ionicSlideBoxDelegate,$state) {
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
  }]);

/**
 * Created by salody on 17-2-18.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorsCtrl',[ '$scope',function ($scope) {

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicFamilyRelationCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.memberArr=[
      {
        name:'老司机',
        phone:'12345678901',
        address:'你猜'
      }, {
        name:'老司机',
        phone:'12345678901',
        address:'你猜'
      }, {
        name:'老司机',
        phone:'12345678901',
        address:'你猜'
      }, {
        name:'老司机',
        phone:'12345678901',
        address:'你猜'
      }, {
        name:'老司机',
        phone:'12345678901',
        address:'你猜'
      }, {
        name:'老司机',
        phone:'12345678901',
        address:'你猜'
      }
    ];
$scope.onClickAddPersonal=function () {
  $state.go('airClinicAddPersonal')
};
$scope.onClickEditPersonal=function () {
  $state.go('airClinicEditPersonal')
}
  }]);

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
  .controller('AirClinicIllnessDescriptionCtrl',[ '$scope', '$ionicActionSheet','$state',function ($scope, $ionicActionSheet,$state) {
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
          switch (index) {
            case 0:
              openCamera();
              break;
            case 1:
              openFilePicker();
              break;
            default:
              return true;
          }
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
    };
    function setOptions(srcType) {
      return {
        // Some common settings are 20, 50, and 100
       /* quality: 50,*/
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType
        /*encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks*/
      };

    }
    function openCamera(selection) {

      var srcType = Camera.PictureSourceType.CAMERA;
      var options = setOptions(srcType);
      /*var func = createNewFileEntry;*/

      navigator.camera.getPicture(function cameraSuccess(imageUri) {


        // You may choose to copy the picture, save it somewhere, or upload.


      }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

      }, options);
    }
    function openFilePicker(selection) {
      var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
      var options = setOptions(srcType);
      /*var func = createNewFileEntry;*/

      navigator.camera.getPicture(function cameraSuccess(imageUri) {


        // You may choose to copy the picture, save it somewhere, or upload.


      }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

      }, options);
    }
  }]);

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
  .controller('AirClinicPageCtrl',['$scope', function ($scope) {

  }]);

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
      };
      $scope.onClickMyAppointment=function () {
        $state.go('airClinicMyAppointment')
      };
      $scope.onClickFamilyRelation=function () {
        $state.go('airClinicFamilyRelation')
      };
      $scope.onClickResetPassword=function () {
        $state.go('airResetPassword')
      };
      $scope.onClickLogout=function () {
        $state.go('airLogin')
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

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl',['$scope', function ($scope) {
    $scope.onClickResetButton=function () {
      console.log('重置')
    };
    $scope.onClickCancelButton=function () {
      console.log('取消')
    }

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirResetPasswordCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.onClickCancelButton=function () {
      $state.go('airLogin');
      console.log('取消');
    }

  }]);
