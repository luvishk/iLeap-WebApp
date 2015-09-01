var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
	console.log("hello");
    //$scope.firstName = "John";
    //$scope.lastName = "Doe";
    $scope.message = "Student Registration Form";

    $scope.create = function () {
    	console.log($scope.serviceClient);
    	$http.post("/serviceClients", $scope.serviceClient)
    	.success(function (response) { 
    		//console.log(response) ;
    		$scope.all();
    	});
    };

    $scope.renderServiceClients = function (response) {
    	$scope.serviceClients = response;
    };

    //get all
    $scope.all = function () {

    	$http.get("/serviceClients").success($scope.renderServiceClients);

    

    	
    };
    
    $scope.all();


});

