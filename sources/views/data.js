import {JetView} from "webix-jet";
import {datacountries} from "models/records";
import {datastatuses} from "models/records";

export default class DataView extends JetView{
	config(){
		return datalayout ;
	}
	init(view){
		$$("countriesTable").sync(datacountries);
		$$("StatusesTable").sync(datastatuses);
		$$("countriesForm").bind($$("countriesTable")); //не работает
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
	]
};

var countriesForm = {
	view:"form",
	id:"countriesForm",
	cols: 
	[
		{ view:"text", label:"Title", name:"title", value:""},
		{ view:"text", label:"Year", name:"year", value:"" },
		{ view:"button", value:"Save" , type:"form", click:"save_form"},
		{ view:"button", value:"Delete" , type:"form", click:"deleteitem"},
	],
}

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


function save_form(){
	var form = $$("countriesForm");
		//if(form.isDirty())
		//{

			//if(!form.validate()) return false;
			$$("countriesForm").save();
		//};
};

function deleteitem(){
			var sel = $$("countriesTable").getSelectedId();
          	if(sel)
          	datacountries.remove(sel);
};
};
