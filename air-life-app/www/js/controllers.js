/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers', []);

/**
 * Created by xianmengadc on 17-2-17.
 */
//添加联系人
angular.module('starter.controllers')
  .controller('AirClinicAddPersonalCtrl', ['$scope', '$state','AddPersonal', function ($scope, $state,AddPersonal) {

    $scope.addPersonal = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
      // sessionStorage.getItem('userId'), //  用户id
      name:'123',
      phone:'123',
      gender:'123',
      address:'123',
      identity_card:'123'
    };
    $scope.saveAddPersonal=function () {
      AddPersonal.savePersonal($scope.addPersonal)
        .then(function (data) {
          console.log(data,'success');
          // $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.onClickAddPersonalButton=function () {
      $scope.saveAddPersonal();
      $state.go('airClinicFamilyRelation')
    }

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicAddressCtrl', ['$scope', '$state', function ($scope, $state) {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: $scope.addressNumber
    });
    var marker = new AMap.Marker({
      icon : './img/mark_bs.png',//24px*24px
      position: $scope.addressNumber,
      offset: new AMap.Pixel(0, 0),
      map:map

    });
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
      infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">'+$scope.addressName.name+'</div><div class="info-content">'+
        $scope.addressName.address+'<br/>',
        offset: new AMap.Pixel(0, 0)
      });
      infowindow.open(map,$scope.addressNumber);
    })

  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicDepartmentCtrl',['$scope','AirClinicDepartment','$rootScope',function ($scope,AirClinicDepartment,$rootScope) {
    $scope.clinicDepartment=null;
    $scope.clinicSpecial=[];

    AirClinicDepartment.login({
      token:$scope.userData.token,
      hospital_id:$scope.hospital_id
    })
      .then(function (data) {
        console.log(data.data.result);
        $scope.clinicDepartment=data.data.result;
        $scope.clinicSpecial=data.data.result.specialities;
        $rootScope.addressNumber=[$scope.clinicDepartment.longitude,$scope.clinicDepartment.latitude];
        $rootScope.addressName={
          name:$scope.clinicDepartment.name,
          address:$scope.clinicDepartment.address
        };
        console.log($scope.addressNumber);
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
//修改联系人
angular.module('starter.controllers')
  .controller('AirClinicEditPersonalCtrl', ['$scope','$state','EditPersonal',function ($scope,$state,EditPersonal) {
    $scope.editPersonal = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      patient_id:$scope.userData.id
      // sessionStorage.getItem('userId'), //  用户id
    };
    $scope.message=function () {
      EditPersonal.delete($scope.contact)
        .then(function (data) {
          console.log(data,'success');
          $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };




  $scope.onClickDeletePersonal=function () {
    $scope.message();
    $state.go('airClinicFamilyRelation')
  }
  }])

/**
 * Created by xianmengadc on 17-2-17.
 */

//家庭联系人
angular.module('starter.controllers')
  .controller('AirClinicFamilyRelationCtrl', ['$scope','$state','Contacts',function ($scope,$state,Contacts) {
    $scope.contact = {
      token:$scope.userData.token,
        // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id
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

$scope.onClickAddPersonal=function () {
  $state.go('airClinicAddPersonal')
};
$scope.onClickEditPersonal=function () {
  $state.go('airClinicEditPersonal')
};


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

  }]);




/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirClinicHomeCtrl', ['$scope','$state','AirClinicHome','$rootScope',function ($scope,$state,AirClinicHome,$rootScope) {
    //绑定的$scope
    $scope.clinicArray=[];
    $scope.changeClinic=function () {
      $state.go('airClinicDepartment');
      $rootScope.hospital_id= $scope.clinicArray[$index].id;
    };

    AirClinicHome.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        console.log(data.data.result);
        $scope.clinicArray=data.data.result;
        // $rootScope.hospital_id=data.data.result.id;
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
//我的预约
angular.module('starter.controllers')
  .controller('AirClinicMyAppointmentCtrl', ['$scope','$state','MyAppointment',function ($scope,$state,MyAppointment) {
    // $scope.user=$rootScope.userData;
    console.log($scope.userData);
    $scope.noPay = {
      token:$scope.userData.token,
        // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
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
//个人信息
angular.module('starter.controllers')
  .controller('AirClinicPersonalMseeageCtrl', ['$scope','$state','PersonalMessage',function ($scope,$state,PersonalMessage) {

    $scope.showPersonalMessage = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
      // sessionStorage.getItem('userId'), //  用户id
    };
    $scope.showPersonalMessage=function () {
      PersonalMessage.showMessage($scope.showPersonalMessage)
        .then(function (data) {
          console.log(data,'success');
          // $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.updatePersonalMessage = {
      token:$scope.userData.token,
      // sessionStorage.getItem('token'),         //  令牌
      normal_user_id:$scope.userData.id,
      // sessionStorage.getItem('userId'), //  用户id
      name:'123',
      gender:'123',
      address:'123',
      identity_card:'123'
    };
    $scope.updatePersonalMessage=function () {
      PersonalMessage.updateMessage($scope.updatePersonalMessage)
        .then(function (data) {
          console.log(data,'success');
          // $scope.peopleArr=data.data.result;
        },function (er) {
          console.log(er,'error');
        })
    };
    $scope.showPersonalMessage();
    $scope.onClickUpdatePersonalMessage=function () {
      $scope.updatePersonalMessage()
    }
  }]);

/**
 * Created by xianmengadc on 17-2-17.
 */
angular.module('starter.controllers')
  .controller('AirHomePagerCtrl', ['$scope','$state','AirHomePage',function ($scope,$state,AirHomePage) {
    //推荐医生
    AirHomePage.login({
      token:$scope.userData.token
    })
      .then(function (data) {
        // console.log(data);
        $scope.doctorData=data.data.result;

      }, function () {

      });
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
          $rootScope.userData=data.data.result;
          // console.log($scope.data.data.result);
          //保存数据到本地
          // console.log($scope.userData);
          sessionStorage.setItem('token', data.data.result.token);
          sessionStorage.setItem('id', data.data.result.id);
          sessionStorage.setItem('username', data.data.result.username);

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
