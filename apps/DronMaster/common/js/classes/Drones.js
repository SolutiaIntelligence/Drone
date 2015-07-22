function Drones(){
	
	this.data={
		name:"",
		model:"",
		img:"",
		category:"",
		segment:"",
		pilotFstName:"",
		pilotLstName:"",
		insuranceNumber:"",
		camera:""
	};
	
	this.save=_saveDataDrones;
	
	
};

function _saveDataDrones(){
	
	var sHelper= new clsJsonStoreHelper();
	sHelper.collectionName="Drones";
	sHelper.document= this.data;
	sHelper.id=0;
	sHelper.fnSuccess = function(){
		
	};
	sHelper.fnFail = function(){
		
	};
	sHelper.save(false,false);
	
	
};