import {JetView} from "webix-jet";


export default class Settings extends JetView{
	config(){
		return langselect;
	}
}

const langselect = 
{
	rows:
	[
		{
			view:"select",
			label:"Lang", 
			options:[
						{ value:"Eng", id:1 },
						{ value:"Rus", id:2 }
					] 
		}, {}
	]
};