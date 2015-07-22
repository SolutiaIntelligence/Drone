
/* JavaScript content from js/JSonStore/collections/collections.js in folder common */
function getCollections(){
	return {
		Account : {
			searchFields: {userName:"string",
				password:"string",
				frstName:"string",
				lstName:"string",
				mail:"string"}
		}
	};
}

;(function () {

	WL.JSONStore.init(getCollections(), {
		// password : 'PleaseChangeThisPassword'
	})

	.then(function () {
		WL.Logger.debug(['All collections was loaded successfully'].join('\n'));
	})

	.fail(function (errObj) {
		WL.Logger.ctx({pretty: true}).error(errObj);
	});

}());
