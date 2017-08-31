
var myapp = angular.module('myApp', []);

myapp.controller('cont1', function($scope, $rootScope) {
	$scope.mymsg = "Hello World";
	$rootScope.globalName = "AngularJS";
});

myapp.controller('cont2', function($scope, $rootScope) {
	$scope.firstname = "Anil";
	$scope.lastname = "Kumar";
	alert($rootScope.globalName)
	//$scope.myName = $rootScope.globalName;
});

myapp.controller('cont3', function($scope) {
	$scope.firstname = "Hari";
	$scope.lastname = "Keerthana";
});
