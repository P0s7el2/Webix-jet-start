import {JetView} from "webix-jet";

export default class DataViewForm extends JetView{


	config(){
		return formlayout ;
	}
	init(view){
		//$$("countriesTable").sync(datacountries);
				//$$("countriesForm").bind($$("countriesTable")); //не работает
		//$$("StatusesTable").sync(datastatuses);
		//this.on($$(countriesTable), "onAvtoSelect", function(){
		}
	update(){
			//this.setValues
		}
}



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