
var app = angular.module("myApp", []);
app.controller("profilesCtrl", function($scope) {
    $scope.items = [{
        indexValue: 1,
        name: "Bhaumik Patel"
    }, 
	{
        indexValue: 2,
        name: "Keishinn Anne Mikel"
    }, 
	{
        indexValue: 3,
        name: "Sergio Hanson"
    }, 
	{
        indexValue: 4,
        name: "Seccom Masada Sensei"
    }, 
	{
        indexValue: 5,
        name: "zara peterson"
    }, 
	{
        indexValue: 6,
        name: "Paul Walker"
    }];
	
	$scope.sidebarButtonClick = function(event) {
		var element = event.currentTarget;
		console.log(event.target.id); 
		console.log(event.target.id[items]);
	};
});

