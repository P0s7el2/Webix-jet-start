import {JetView} from "webix-jet";
import {datacountries} from "models/records";
import {datastatuses} from "models/records";
import {DataViewForm} from "./DataViewForm";

export default class DataView extends JetView{


	config(){
		return datalayout ;
	}
	init(view){
		$$("countriesTable").sync(datacountries);
				//$$("countriesForm").bind($$("countriesTable")); //не работает
		$$("StatusesTable").sync(datastatuses);
		this.app.callEvent("do.update.form");

		})
	}
}

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
	on: {
		onItemSelect:function add_ ()
		{

		}
	}
};



var statusesTable = {
	view:"datatable", 
	id:"StatusesTable", 
	select:true, 
	autoConfig:true,
	columns:
	[
		{id: "full", header:"Full name", name:"full", sort:"string", width:400},
		{id: "short", header:"Short name", name:"short", sort:"string", width:100}
	]
};

var datacells = {
  cells:[ 
    { id:"Countries", rows:[countriesTable, countriesForm]},
    { id:"Statuses", rows:[statusesTable]}
  ]
};

var datalayout  = 
{
	cols:[
	dataMenu, datacells
	]
};


