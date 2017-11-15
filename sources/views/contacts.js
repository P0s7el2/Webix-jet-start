import {JetView} from "webix-jet";
import {contacts} from "models/contacts_data";

export default class Contacts extends JetView{
	config(){
		return contact_data;
	}
	init(view){
		$$("contact_list").sync(contacts);
		$$("contact_form").bind($$("contact_list"));
	}
}



const contact_data = {
	cols:[
		{
			rows:[
				{
					 view:"template", template:"Contacts", type:"header"
				},
				{
					view: "list",
					id: "contact_list",
					select: true,
					autoheight: true,
					type:
					{
  							delete:function(obj ){
      						return "<span class='check webix_icon fa-"+(obj.markCheckbox?"check-":"")+"close'></span>";
    						},
    						upditm:function(obj){
    							return "kek";
    						}    						
  					},
  					onClick:
  					{
  					check:function(e, id)
	  					{
	  					alert("deletitem");
	  					//contacts.remove(id);
	  					}
 					},
  					template:"#user# / #email# {common.delete()}",
  					on:{
  							OnItemClick:function (id){$$("contact_list").refresh("template","kk"); } // не работает рефреш...
  						}
				},
				{},
				{ view:"button", value:"add", width:300, align:"center" }

			]
		},
		{
			rows:
			[
				{
					view: "form",
					id: "contact_form",
					rows:
					[
						{ view:"text", label:"User name", name:"user", value:""},
						{ view:"text", label:"Email", name:"email", value:"" },

					]
				},
				{ },
				{
					rows: [
						{ view:"select", options:["1", "1.5", "2"], label:"Country"},
            			{ view:"select", options:["1", "1.5", "2"], label:"Status" }
            			]
            	},
            	{},
            	{ view:"button", value:"Save", width:200, align:"center" }
			]
		}

	]
};