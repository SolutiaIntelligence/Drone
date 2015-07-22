
/* JavaScript content from js/classes/account.js in folder common */
function Account(){
	

	this.data={userName:"",
				password:"",
				frstName:"",
				lstName:"",
				mail:""
				};
	this.save=_saveDataAccount;
	
};

function _saveDataAccount(){
	
	var sHelper= new clsJsonStoreHelper();
	
	sHelper.collectionName ="Account";
	sHelper.document = this.data;
	sHelper.id = 0;
	sHelper.fnSuccess = function(){
		
	};
	sHelper.fnFail = function(){
		
	};
	sHelper.save(false,false);
	
	
};