angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  $scope.loginData = {};

  $scope.loggedIn = false;

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doRegistration = function() {
    $http({
      method: 'post',
      url: 'http://localhost:3000/api/users/',
      data: {
        user_name: 'test',
        email: 'test@test',
        password: 'test'
      }
    }).then(function(response) {
      console.log('success');
      console.log(response);
    }, function(response) {
      console.log('fail');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.doLogin = function() {
    //handle the actual login... api
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('OutfitsCtrl', function($scope, $stateParams, $http) {
  //how to move stateparams back to the detail page...
  $scope.id = $stateParams.id;

  $scope.doOutfitsRequest = function() {
    $http({
      method: 'get',
      url: 'http://localhost:3000/api/outfits/'
    }).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log('fail');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.doOutfitRequest = function() {
    $http({
      method: 'get',
      url: 'http://localhost:3000/api/outfits/' + $stateParams.id
    }).then(function(response) {
      console.log(response);
    }, function(response) {
      console.log('fail');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.outfits = [
    {
      outfit_id: 1,
      occasion: 'First date',
      image_url: 'http://media4.popsugar-assets.com/files/2015/05/19/798/n/1922398/6ef7687e_edit_img_cover_file_15954503_1432054424_9k_-4fZ3IXJ.xxxlarge/i/How-Take-Mirror-Selfie.jpg',
      positive: '2',
      negative: '21'
    },
    {
      outfit_id: 2,
      occasion: 'Festival mood',
      image_url: 'http://trendymods.com/wp-content/uploads/2015/09/2-How-To-Take-The-Perfect-Changing-Room-Selfie-.jpg',
      positive: '30',
      negative: '11'
    },
    {
      outfit_id: 3,
      occasion: 'Job interview',
      image_url: 'https://s-media-cache-ak0.pinimg.com/236x/a5/dd/c7/a5ddc78f713e305d1448491ace98d551.jpg',
      positive: '40',
      negative: '5'
    }
  ];
})

.controller('PictureCtrl', function($scope, $http) {

  //needs to do the api stuff

});