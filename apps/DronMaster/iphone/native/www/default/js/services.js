
/* JavaScript content from js/services.js in folder common */
angular.module('starter.services', [])

.factory('DronesFactory', function() {

  var drones = [{
    id: 0,
    name: "Mike's Drone",
    model: '3D Solo',
    detail: 'Detalles',
    img: 'https://www.droidika.com/wp-content/uploads/2015/04/SA11A-Solo-aerial-drone-kit1-500x500.jpg',
    category:'Liviano',
    segment:'Comercial'
  },{
	    id: 1,
	    name: "Jerry's Drone",
	    model: '3D Solo',
	    detail: 'Detalles',
	    img: 'https://www.droidika.com/wp-content/uploads/2015/04/SA11A-Solo-aerial-drone-kit1-500x500.jpg',
	    category:'Liviano',
	    segment:'Comercial'
	  }
  ,{
	    id: 2,
	    name: "Danny's Drone",
	    model: '3D Solo',
	    detail: 'Detalles',
	    img: 'https://www.droidika.com/wp-content/uploads/2015/04/SA11A-Solo-aerial-drone-kit1-500x500.jpg',
	    category:'Liviano',
	    segment:'Comercial'
	  },{
		    id: 3,
		    name: "Juan's Drone",
		    model: '3D Solo',
		    detail: 'Detalles',
		    img: 'https://www.droidika.com/wp-content/uploads/2015/04/SA11A-Solo-aerial-drone-kit1-500x500.jpg',
		    category:'Liviano',
		    segment:'Comercial'
		  }];

  return {
    all: function() {
      return drones;
    },
    remove: function(drone) {
      drones.splice(drones.indexOf(drone), 1);
    },
    get: function(DroneId) {
      for (var i = 0; i < drones.length; i++) {
        if (drones[i].id === parseInt(DroneId)) {
          return drones[i];
        }
      }
      return null;
    }
  };
});
