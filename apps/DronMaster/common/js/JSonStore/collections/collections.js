function getCollections(){
	return {
		Account : {
			searchFields: {
				userName:"string",
				password:"string",
				frstName:"string",
				lstName:"string",
				mail:"string"
				}
		},	
		Drones : {
			searchFields: {
				name:"string",
				model:"string",
				img:"string",
				category:"string",
				segment:"string",
				pilotFstName:"string",
				pilotLstName:"string",
				insuranceNumber:"string",
				camera:"string"					
				}
			
			
			
		}
		
	};
}

;(function () {

	WL.JSONStore.init(getCollections(), {
		// password : 'PleaseChangeThisPassword'
	})

	.then(function () {
		WL.Logger.debug(['All collections were loaded successfully'].join('\n'));
	})

	.fail(function (errObj) {
		WL.Logger.ctx({pretty: true}).error(errObj);
	});

}());
