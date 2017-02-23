/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers', []);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicAddPersonCtrl', ['$scope', '$state', function ($scope, $state) {

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicAddressCtrl', ['$scope', '$state', function ($scope, $state) {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [108.84106, 34.17254]
    });
    var marker = new AMap.Marker({
      icon : './img/mark_bs.png',//24px*24px
      position: [108.84106, 34.17254],
      offset: new AMap.Pixel(0, 0),
      map:map

    });
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
      infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">爱尔诊所后宰门诊室</div><div class="info-content">'+
        '紫薇龙腾新世界2611室<br/>',
        offset: new AMap.Pixel(0, 0)
      });
      infowindow.open(map,[108.84106, 34.17254]);
    })

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDepartmentCtrl',['$scope','AirClinicDepartment',function ($scope,AirClinicDepartment) {
    console.log($scope.userData.token);
    AirClinicDepartment.login({
      token:$scope.userData.token,
      hospital_id:1
    })
      .then(function (data) {
        console.log(data);
      }, function () {

      });
  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDoctorDetailsCtrl', function ($scope,$ionicSlideBoxDelegate,$state) {

    $scope.appointment = function () {
      $state.go('airClinicIllnessDescription');
    };
    $scope.tab = {
     current: 0
   };
    $scope.activeTab = function (index) {
      $scope.tab.current = index;
    }
  });

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
  .controller('AirClinicFamilyRelationCtrl', ['$scope','$state','Contacts',function ($scope,$state,Contacts) {
    $scope.contact = {
      token:$scope.userData,
        // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData
        // sessionStorage.getItem('userId'), //  用户id
    };
    $scope.message=function () {
      Contacts.information($scope.contact)
        .then(function (data) {
          console.log(data,'success');
          $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.message();
    // $scope.memberArr=[
    //   {
    //     name:'老司机',
    //     phone:'12345678901',
    //     address:'你猜'
    //   }, {
    //     name:'老司机',
    //     phone:'12345678901',
    //     address:'你猜'
    //   }, {
    //     name:'老司机',
    //     phone:'12345678901',
    //     address:'你猜'
    //   }, {
    //     name:'老司机',
    //     phone:'12345678901',
    //     address:'你猜'
    //   }, {
    //     name:'老司机',
    //     phone:'12345678901',
    //     address:'你猜'
    //   }, {
    //     name:'老司机',
    //     phone:'12345678901',
    //     address:'你猜'
    //   }
    // ];
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
  .controller('airClinicHomeCtrl', ['$scope','$state','AirClinicHome',function ($scope,$state,AirClinicHome) {
    //绑定的$scope
    $scope.clinicArray=[];

    AirClinicHome.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        // console.log(data.data.result);
        $scope.clinicArray=data.data.result;
      }, function () {

      });

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
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
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
angular.module('starter.controllers')
  .controller('AirClinicMyAppointmentCtrl', ['$scope','$state','MyAppointment',function ($scope,$state,MyAppointment) {
    // $scope.user=$rootScope.userData;
    console.log($scope.userData);
    $scope.noPay = {
      token: sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData,
        // sessionStorage.getItem('userId'), //  用户id
      page: 1,       //  页码, 默认1
      count: 20       //  个数, 默认20
    };
    // $scope.noPayOrders=[];
    $scope.onNoPay=function () {
      MyAppointment.unpaid($scope.noPay)
        .then(function (data) {
          console.log(data,'success');
          $scope.noPayOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.onPay=function () {
      MyAppointment.paid($scope.noPay)
        .then(function (data) {
          console.log(data,'success');
          $scope.noPayOrders=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.onNoPay();
    $scope.onPay();
    // $scope.onClickLoginButton = function () {
    //
    //   myAppointment.appointment($scope.user)
    //     .then(function (data) {
    //       $scope.data = data;
    //       $state.go('airTabs.airHomePage');
    //       $rootScope.userData=$scope.data.data.result;
    //       // console.log($scope.data.data.result);
    //       // console.log($scope.userData);
    //       // sessionStorage.setItem('username', $scope.data.data.result.user.name);
    //       // sessionStorage.setItem('tokenID', $scope.data.data.result.token);
    //     }, function () {
    //
    //     });
    // };
  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicMyServiceCtrl', ['$scope','$state',function ($scope,$state) {
    // $scope.

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
  .controller('AirClinicPayCtrl', function ($scope) {
    $scope.button = 'a';
    $scope.activeButton = function (name) {
      $scope.button = name;
    }
  });



/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicPersonalCenterCtrl', ['$scope','$state',function ($scope,$state,myAppointment) {
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
    console.log($scope.userData);

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirLoginCtrl', ['$scope', '$state', 'AirLogin','$rootScope', function ($scope, $state, AirLogin,$rootScope) {
    // $scope.onClickLoginButton=function () {
    //   $state.go('airTabs.airHomePage');
    // };
    $scope.onClickResetPasswordButton = function () {
      $state.go('airResetPassword');
    };
    $scope.onClickRegisterUserButton = function () {
      $state.go('airRegisterUser');
    };

    $scope.user = {
      username: 'xianmeng',
      password: '123456'
    };
    $scope.onClickLoginButton = function () {

      AirLogin.login($scope.user)
        .then(function (data) {
          $scope.data = data;
          $state.go('airTabs.airHomePage');
          $rootScope.userData=$scope.data.data.result;
          // console.log($scope.data.data.result);
          //保存数据到本地
          // console.log($scope.userData);
            }, function () {

        });
    };
  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirRegisterUserCtrl',['$scope','AirRegisterUser','$state', function ($scope,AirRegisterUser,$state) {
    // $scope.onClickResetButton=function () {
    //   console.log('重置')
    // };
    $scope.onClickCancelButton=function () {
      console.log('取消')
    };

    $scope.user = {
      username: '',   //用户名
      password: '',   //密码
      sms_code:'',    //短信验证码
      invitation_code:''//邀请码
    };
    $scope.onClickRegisterButton = function () {

      AirRegisterUser.login($scope.user)
        .then(function (data) {
          console.log(data);
          // $state.go('airTabs.airHomePage');
           }, function () {

        });
    };
  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirResetPasswordCtrl', ['$scope','$state','AirResetPassword',function ($scope,$state,AirResetPassword) {
    $scope.onClickCancelButton=function () {
      $state.go('airLogin');
      console.log('取消');
    };
    $scope.user = {
      username: '',   //用户名
      password: '',   //密码
      sms_code:''    //短信验证码
    };
    $scope.onClickResetButton=function () {
      AirResetPassword.login($scope.user)
        .then(function (data) {
          $scope.data = data;
          console.log($scope.data);
          // $state.go('airTabs.airHomePage');
        }, function () {

        });

    };

  }]);
