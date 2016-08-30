angular.module('winTool', [])
.controller('myCtrl', ['$scope', function($scope) {

  // Data array
  $scope.win10 = {
      screen1: { base_img: "img/1.png", areas: {"49,563,3,596": "screen2"}},
      screen2: { base_img: "img/2.png", areas: {"49,563,3,596": "screen1", "5,445,255,488": "screen3"}},
      screen3: { base_img: "img/3.png", areas: {"49,563,3,596": "screen1", "759,0,800,29": "screen1"}}
  };

  // Function to update image source and coordinates.
  $scope.loadNewScreen = function(new_screen) {

    $scope.img_src = eval("$scope.win10." + new_screen + ".base_img");
    $scope.img_coords = eval("$scope.win10." + new_screen + ".areas");

  };

  // Set homescreen for simulation
  $scope.loadNewScreen("screen1");

// Javascript closure
}]);
