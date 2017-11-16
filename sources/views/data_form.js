import {JetView} from "webix-jet";
import {getData, setData} from "models/records";

export default class DataViewForm extends JetView{


	config(){
		return countriesForm ;
	}
	init(view){
		 this.app.attachEvent("dataSelected", (id) => {
		 	debugger;
			this.getRoot().setValues( getData(id) );//this.view.setValues
		} )
		}
}



var countriesForm = {
	view:"form",
	id:"countriesForm",
	cols: 
	[
		{ view:"text", label:"name", name:"name", value:""},
		{ view:"text", label:"icon", name:"icon", value:"" },
		{ view:"button", value:"Save" , type:"form", click:() => save_form()},
		{ view:"button", value:"Delete" , type:"form", click:deleteitem},
	], 
};

function save_form(){
	var form = $$("countriesForm");
		//if(form.isDirty())
		//{
			var data = form.getValues();
			//if(!form.validate()) return false;
			setData(data.id, data);
		//};
};

function deleteitem(){
			var sel = $$("countriesTable").getSelectedId();
          	if(sel)
          	datacountries.remove(sel);
};