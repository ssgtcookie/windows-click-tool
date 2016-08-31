var app = angular.module('winTool', ['angular-loading-bar']);
app.controller('myCtrl', ['$scope', function($scope) {

  // Data array.
  // For coordinates: http://imagemap-generator.dariodomi.de/
  $scope.simulationData = {

      Windows10:
      {
          screen1: { base_img: "img/window10_screen1.png", areas: {"49,563,3,596": "screen2"}},
          screen2: { base_img: "img/window10_screen2.png", areas: {"49,563,3,596": "screen1", "5,445,255,488": "screen3"}},
          screen3: { base_img: "img/window10_screen3.png", areas: {"49,563,3,596": "screen2", "759,0,800,29": "screen1"}}
      },

      Windows7:
      {
        screen1: { base_img: "img/window7_screen1.png", areas: {"49,563,3,596": "screen2"}},
        screen2: { base_img: "img/window7_screen2.png", areas: {"49,563,3,596": "screen1", "264,366,413,401": "screen3"}},
        screen3: { base_img: "img/window7_screen3.png", areas: {"49,563,3,596": "screen4", "759,0,800,29": "screen1"}},
        screen4: { base_img: "img/window7_screen4.png", areas: {"49,563,3,596": "screen3", "264,366,413,401": "screen3", "759,0,800,29": "screen1"}}
      },

    }; // Close the array.

  // Function to update the current screen to the new screen.
  $scope.loadNewScreen = function(simulation, nextScreen) {
    $scope.current_simulation = simulation;
    $scope.current_screen = nextScreen;
    $scope.img_src = eval("$scope.simulationData." + simulation +  "." + nextScreen + ".base_img");
    $scope.img_coords = eval("$scope.simulationData." + simulation +  "." + nextScreen + ".areas");
  };

  // Set first screen.
  $scope.loadNewScreen("Windows10","screen1");

}]); // Close controller
