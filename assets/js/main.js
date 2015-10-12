$(function() {

});

var app = angular.module('frameworkApp', ['ui.slider']);

app.controller('SliderCtrl', function ($scope) {
  $scope.range = {'min': '13', 'max': '32' };
});
