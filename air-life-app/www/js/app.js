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
      // .state('airTabs.airHomePage', {
      //   url: '/air-home-page',
      //   views: {
      //     'air-home-page': {
      //       templateUrl: 'templates/air-home-page.html',
      //       // controller: 'AirTabsHomePageCtrl'
      //     }
      //   }
      // })
      // //  tabs个人中心
      // .state('airTabs.airHomePage', {
      //   url: '/air-home-page',
      //   views: {
      //     'air-home-page': {
      //       templateUrl: 'templates/air-home-page.html',
      //       // controller: 'AirTabsHomePageCtrl'
      //     }
      //   }
      // })

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
      //诊所主页
      .state('airClinicPage', {
        url: '/air-clinic-page',
        templateUrl: 'templates/air-clinic-page.html',
        controller: 'AirClinicPageCtrl'
      })
      //门诊医生
      .state('airClinicDoctors', {
        url: '/airClinicPage/:clinicId',
        templateUrl: 'templates/air-clinic-doctors.html',
        controller: 'AirClinicDoctorsCtrl'
      })
      //医生详情
      .state('airClinicDoctorDetails', {
        url: '/air-clinic-Doctor/:doctorId',
        templateUrl: 'templates/air-clinic-doctor-details.html',
        controller: 'AirClinicDoctorDetailsCtrl'
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/air-login');

  });
