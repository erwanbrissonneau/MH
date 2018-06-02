
var ListBody = {
	instance : null,
	open : function(){
		var list = document.createElement("DIV");
		ListBody.instance = list;
		list.appendChild(document.createTextNode("Ma liste"));
		document.getElementById("eastRegion").appendChild(list);
	}
}