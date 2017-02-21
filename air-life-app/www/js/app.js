// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    //将tab置于下方
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    //   .state('tab', {
    //   url: '/tab',
    //   abstract: true,
    //   templateUrl: 'templates/tabs.html'
    // })
    //
    // // Each tab has its own nav history stack:
    //
    // .state('tab.dash', {
    //   url: '/dash',
    //   views: {
    //     'tab-dash': {
    //       templateUrl: 'templates/tab-dash.html',
    //       controller: 'DashCtrl'
    //     }
    //   }
    // })
    //
    // .state('tab.chats', {
    //     url: '/chats',
    //     views: {
    //       'tab-chats': {
    //         templateUrl: 'templates/tab-chats.html',
    //         controller: 'ChatsCtrl'
    //       }
    //     }
    //   })
    //   .state('tab.chat-detail', {
    //     url: '/chats/:chatId',
    //     views: {
    //       'tab-chats': {
    //         templateUrl: 'templates/chat-detail.html',
    //         controller: 'ChatDetailCtrl'
    //       }
    //     }
    //   })
    //
    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'templates/tab-account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // })
    //  主页tabs
      .state('airTabs', {
        url: '/air-tabs',
        abstract: true,
        templateUrl: 'templates/air-tabs.html'
      })
      //  tabs首页
      .state('airTabs.airHomePage', {
        url: '/air-home-page',
        views: {
          'air-home-page': {
            templateUrl: 'templates/air-home-page.html',
            controller: 'AirHomePagerCtrl'
          }
        }
      })
      //  tabs我的服务
      .state('airTabs.airClinicMyService', {
        url: '/air-clinic-my-service',
        views: {
          'air-clinic-my-service': {
            templateUrl: 'templates/air-clinic-my-service.html',
            controller: 'AirClinicMyServiceCtrl'
          }
        }
      })
      // //我的服务
      // .state('airClinicMyService', {
      //   url: '/air-clinic-my-service',
      //   templateUrl: 'templates/air-clinic-my-service.html',
      //   controller: 'AirClinicMyServiceCtrl'
      // })
      //个人中心
      // .state('airClinicPersonalCenter', {
      //   url: '/air-clinic-personal-center',
      //   templateUrl: 'templates/air-clinic-personal-center.html',
      //   controller: 'AirClinicPersonalCenterCtrl'
      // })
      //  tabs个人中心
      .state('airTabs.airClinicPersonalCenter', {
        url: '/air-clinic-personal-center',
        views: {
          'air-clinic-personal-center': {
            templateUrl: 'templates/air-clinic-personal-center.html',
            controller: 'AirClinicPersonalCenterCtrl'
          }
        }
      })

      //登陆
      .state('airLogin', {
        url: '/air-login',
        templateUrl: 'templates/air-login.html',
        controller: 'AirLoginCtrl'
      })
      //重置密码
      .state('airResetPassword', {
        url: '/air-reset-password',
        templateUrl: 'templates/air-reset-password.html',
        controller: 'AirResetPasswordCtrl'
      })
      //注册用户
      .state('airRegisterUser', {
        url: '/air-register-user',
        templateUrl: 'templates/air-register-user.html',
        controller: 'AirRegisterUserCtrl'
      })
      //爱尔诊所
        .state('airClinicHome', {
            url: '/air-clinic-home',
            templateUrl: 'templates/air-clinic-home.html',
            controller: 'airClinicHomeCtrl'
        })
      //诊所主页
      .state('airClinicPage', {
        url: '/air-clinic-page',
        templateUrl: 'templates/air-clinic-page.html',
        controller: 'AirClinicPageCtrl'
      })
      //诊所信息
      .state('airClinicDepartment', {
        url: '/air-clinic-department',
        templateUrl: 'templates/air-clinic-department.html',
        controller: 'AirClinicDepartmentCtrl'
      })
      // 门诊医生
      .state('airClinicDoctors', {
        url: '/airClinicPage/:clinicId',
        templateUrl: 'templates/air-clinic-doctors.html',
        controller: 'AirClinicDoctorsCtrl'
      })
      // 医生详情
      .state('airClinicDoctorDetails', {
        url: '/air-clinic-Doctor/:doctorId',
        templateUrl: 'templates/air-clinic-doctor-details.html',
        controller: 'AirClinicDoctorDetailsCtrl'
      })
      //个人信息
      .state('airClinicPersonalMseeage', {
        url: '/air-clinic-personal-message',
        templateUrl: 'templates/air-clinic-personal-message.html',
        // controller: 'AirClinicPersonalMseeageCtrl'
      })
      //添加联系人
      .state('airClinicAddPersonal', {
        url: '/air-clinic-add-personal',
        templateUrl: 'templates/air-clinic-add-personal.html',
        // controller: 'AirClinicAddPersonalCtrl'
      })
      //我的预约
      .state('airClinicMyAppointment', {
        url: '/air-clinic-my-appointment',
        templateUrl: 'templates/air-clinic-my-appointment.html',
        // controller: 'AirClinicMyAppointmentCtrl'
      })
      //家庭联系人
      .state('airClinicFamilyRelation', {
        url: '/air-clinic-family-relation',
        templateUrl: 'templates/air-clinic-family-relation.html',
        controller: 'AirClinicFamilyRelationCtrl'
      })
      //修改联系人
      .state('airClinicEditPersonal', {
        url: '/air-clinic-edit-personal',
        templateUrl: 'templates/air-clinic-edit-personal.html',
        // controller: 'AirClinicEditPersonalCtrl'
      })
      // 病情描述
      .state('airClinicIllnessDescription', {
        url: '/air-clinic-illness-description',
        templateUrl: 'templates/air-clinic-illness-description.html',
        controller: 'AirClinicIllnessDescriptionCtrl'
      })
      // 支付页面
    .state('airClinicPay', {
      url: '/air-clinic-pay',
      templateUrl: 'templates/air-clinic-pay.html',
      controller: 'AirClinicPayCtrl'
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/air-login');

  });
