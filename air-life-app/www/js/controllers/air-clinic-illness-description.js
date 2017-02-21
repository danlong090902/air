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
  });
