$(function() {

  $('.toggle-spinner').on( "click", function() {
    $('.spinner-backdrop').toggle();
  });

});

var app = angular.module('frameworkApp', ['ui.slider', 'uiGmapgoogle-maps']);

app.controller('SliderCtrl', ["$scope", function ($scope) {
  $scope.range = {'min': '13', 'max': '32' };
}]);

app.controller('MapCtrl', ["$scope", function ($scope) {
  $scope.map = {
  	center: {
  		latitude: 47.365464,
  		longitude: -1.1774910000000318
  	},
  	zoom: 5
  };

  $scope.mapDemo = {
  	center: {
  		latitude: 41.9997675,
  		longitude: 8.830762600000071
  	},
  	zoom: 7
  };

  $scope.markers = [];
  $scope.markersDemo = [];

	marker = {
		latitude: 47.365464,
		longitude: -1.1774910000000318,
		show: true,
		id: 0,
		map: $scope.map,
	};

	markerDemo = {
		latitude: 41.9997675,
  		longitude: 8.830762600000071,
		show: true,
		id: 0,
		map: $scope.map,
	};

   $scope.markers.push(marker);
   $scope.markersDemo.push(markerDemo);

  $scope.windowOptions = {
  	visible: false
  };

  $scope.onClick = function() {
  	$scope.windowOptions.visible = !$scope.windowOptions.visible;
  };

  $scope.closeClick = function() {
  	$scope.windowOptions.visible = false;
  };

 //  $scope.headquarters = {
 //  	name: "Manitou",
	// address: "430 route de l'Aubinière",
	// stateAreaRegion: "",
	// city: "Ancenis",
	// country: "France",
	// zipcode: "44150"
 //  };

}]);

app.controller('ContactCtrl', ["$scope", function ($scope) {
	$scope.clickedCoordinates = false;
	$scope.clickCoordinates = function() {
      $scope.clickedCoordinates = !$scope.clickedCoordinates;
    };
}]);



