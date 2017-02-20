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

  .config(function ($stateProvider, $urlRouterProvider) {

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


      .state('airLogin', {
        url: '/air-login',
        templateUrl: 'templates/air-login.html',
        controller: 'AirLoginCtrl'
      })
      .state('airResetPassword', {
        url: '/air-reset-password',
        templateUrl: 'templates/air-reset-password.html',
        controller: 'AirResetPasswordCtrl'
      })
      .state('airRegisterUser', {
        url: '/air-register-user',
        templateUrl: 'templates/air-register-user.html',
        controller: 'AirRegisterUserCtrl'
      })
      .state('airHomePage', {
        url: '/air-home-page',
        templateUrl: 'templates/air-home-page.html',
        controller: 'AirHomePagerCtrl'
      })
      .state('airClinicPage', {
        url: '/air-clinic-page',
        templateUrl: 'templates/air-clinic-page.html',
        controller: 'AirClinicPageCtrl'
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
      // 病情描述
      .state('airClinicIllnessDescription', {
        url: '/air-clinic-illness-description',
        templateUrl: 'templates/air-clinic-illness-description.html',
        controller: 'AirClinicIllnessDescriptionCtrl'
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/air-login');

  });
