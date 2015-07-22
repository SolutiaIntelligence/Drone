
/* JavaScript content from js/controllers.js in folder common */
angular.module('starter.controllers', [])



.controller('AddCtrl',function($scope){
	$scope.data;
	$scope.marca=[
	              {Marca:'D3DX'},
	              {Marca:'Namco'},
	              {Marca:'Bandai'},
	              {Marca:'Square-Enix'}
	              ];
	
})

.controller('LoginCtrl', function($scope) {
    $scope.data = {};
    


})

.controller('DroneCtrl', function($scope,Drones) {
	  $scope.drones = Drones.all();
	  


})

.controller('HttpDroneCtrl', function($scope,$http){
	$http.get('JSonStore/Drones.json').then(function(data){
		$scope.drones=data;
	});
})

.controller('AreasCtrl',function($scope){
	
    /*new GMaps({
		div: '#map',
		lat:0,
		lng:0
    });*/
	var alt;
	var long;
	var map
	navigator.geolocation.getCurrentPosition(function(position) {

		  alt=position.coords.latitude; 
		  long=position.coords.longitude;
		  L.mapbox.accessToken = 'pk.eyJ1Ijoia2llaGwiLCJhIjoiNDJjMGVhODY3YzY2MzU5YjY3NDY2YTQyMjEyMzNiYTkifQ.-NujB8qd6naViQ6XnD4FUA';
		   map = L.mapbox.map('map','mapbox.comic').setView([alt,long],9);
		   var featurelayer = L.mapbox.featureLayer()
			.loadURL('https://raw.githubusercontent.com/mapbox/drone-feedback/master/sources/geojson/us_military.geojson')
			.addTo(map);
		   L.marker([alt,long]).addTo(map);
		});
	


})

.controller('RegistroCtrl', function($scope) {
    
	$scope.account = new Account();
	$scope.account.data.userName ="Juan";
	$scope.account.data.password="qazwsx";
	$scope.account.data.frstName="Perro";
	$scope.account.data.lstName="Cosmico";
	$scope.account.data.mail="asd@gmail.com";
	$scope.account.save();
	
	var jsStore = new clsJsonStoreHelper();
	jsStore.collection = "Account";
	jsStore.fnSuccess = function(number){
		alert(number+" Yeah"); 
	};
	jsStore.fnFail = function(error){
		alert(number+" ):");
	};
	jsStore.count();
	
	

})

.controller('DroneDetailCtrl', function($scope, $stateParams, Drones) {
	
  $scope.drone = Drones.get($stateParams.droneId);
  
})

.controller('AccountCtrl', function($scope) {
	
  $scope.settings = {
    enableFriends: true
  };
  
});
