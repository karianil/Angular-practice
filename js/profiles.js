
var app = angular.module("myApp", []);
app.controller("profilesCtrl", function($scope) {
    $scope.items = [{
        indexValue: 1,
        name: "Bhaumik Patel",
		address: "San Francisco, USA",
		email: "Bhaumik@gmail.com",
		url: "www.Bhaumik.com",
		dob: "June 02, 1988"
    }, 
	{
        indexValue: 2,
        name: "Keishinn Anne Mikel",
		address: "California, USA",
		email: "Keishinn@gmail.com",
		url: "www.Keishinn.com",
		dob: "February 15, 1970"
    }, 
	{
        indexValue: 3,
        name: "Sergio Hanson",
		address: "Pennsylvania, USA",
		email: "Sergio@gmail.com",
		url: "www.Sergio.com",
		dob: "September 22, 1975"
    }, 
	{
        indexValue: 4,
        name: "Seccom Masada Sensei",
		address: "North Carolina, USA",
		email: "Seccom@gmail.com",
		url: "www.Seccom.com",
		dob: "May 31, 1985"
    }, 
	{
        indexValue: 5,
        name: "zara peterson",
		address: "California, USA",
		email: "zara@gmail.com",
		url: "www.zara.com",
		dob: "August 02, 1990"
    }, 
	{
        indexValue: 6,
        name: "Paul Walker",
		address: "Florida, USA",
		email: "Paul@gmail.com",
		url: "www.Paul.com",
		dob: "July 02, 1988"
    }];
	
	$scope.sidebarButtonClick = function(event) {
		var element = event.currentTarget;
		console.log(event.target.id); 
		//console.log(event.target.id[items]);
		
		angular.forEach($scope.items, function(value, key){
		  if(value.indexValue == event.target.id){
			$scope.username = value.name;
			$scope.address = value.address;
			$scope.email = value.email;
			$scope.url = value.url;
			$scope.dob = value.dob;
		  }
			//$scope.lastname = "Kumar";
			//console.log(value.name);
		});
	};
	
	
});

