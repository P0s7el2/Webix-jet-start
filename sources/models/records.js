export const datacountries = new webix.DataCollection({ data:[
	{ id:1, name:"The Shawshank Redemption", icon:1994},
	{ id:2, name:"The Godfather", icon:1972},
	{ id:3, name:"The Godfather: Part II", icon:1972},
	{ id:4, name:"The Good, the Bad and the Ugly", icon:228},
	{ id:5, name:"My Fair Lady", icon:1964},
	{ id:6, name:"12 Angry Men", icon:1957}
]});

export function getData(id){
	return datacountries.getItem(id);
}

export function setData(id, data){
	if (!id)
		datacountries.add(data);
	else
	datacountries.updateItem(id, data);
}

export const datastatuses = new webix.DataCollection({ data:[
	{ id:1, short:"The Shawshank Redemption", full:1994},
	{ id:2, short:"The Godfather", full:1972},
	{ id:3, short:"The Godfather: Part II", full:111}

]});