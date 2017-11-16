import {JetView} from "webix-jet";
import {datacountries} from "models/records";
import {datastatuses} from "models/records";
import DataViewForm from "views/data_form";

export default class DataView extends JetView{


	config(){
	var countriesTable = {
	view:"datatable", 
	id:"countriesTable", 
	select:true, 
	autoConfig:true,
	columns:
	[
		{id: "name", header:"Name", name:"name", sort:"string", width:400},
		{id: "icon", header:"Icon", name:"icon", sort:"string", width:100}
	],
	on:{

		
		onAfterSelect:function(id){ this.$scope.app.callEvent("dataSelected",  [id]) }

	}
};

	var dataMenu = { 
  css:"menu",
  rows:[ 
    { 
      view:"list",
      id:"mylist",
      width:200,
      scroll:false,
      select:true,
      on:{
      	onAfterSelect:function(id){ 
        	$$(id).show(); 
        }
      },
      data:["Countries", "Statuses"]
    }
  ]
};


var datacells = {
  cells:[ 
    { id:"Countries", rows:[countriesTable, DataViewForm]}
   // { id:"Statuses", rows:[statusesTable]}
  ]
};

var datalayout  = 
{
	cols:[
	dataMenu, datacells
	]
};




		return datalayout ;
	}
	init(view){

		view.queryView({ view:"datatable" }).parse(datacountries);
		//this.on($$("countriesTable"), "onAfterSelect", function(id){alert(id);} );
		
	}
}




