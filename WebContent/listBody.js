
var ListBody = {
	instance : null,
	isOpen : false,
	selectIdx : null,
	doShow : function(){
		if(!ListBody.isOpen)
			ListBody.open();
		else
			ListBody.close();
	},
	open : function(){
		ListBody.isOpen = true;
		ListBody.actualiser();
	},
	close : function(){
		ListBody.isOpen = false;
		document.getElementById("eastRegion").removeChild(ListBody.instance);
		ListBody.instance = null;
	},
	actualiser : function(){
		if(ListBody.instance != null)
			document.getElementById("eastRegion").removeChild(ListBody.instance);
		var list = document.createElement("div");
		ListBody.instance = list;
		list.appendChild(ListBody.getHtmlList());
		document.getElementById("eastRegion").appendChild(list);
	},
	getHtmlList : function(){
		var list = document.createElement("lu");
		for (var i = 0 ; i < BODYS.length ; i++) {
			var armor = BODYS[i];
			var ligne = document.createElement("li");
			var el = document.createElement("span");
			if(ListBody.selectIdx != null && ListBody.selectIdx == i)
				el.style.color = 'red';
			el.appendChild(document.createTextNode(armor.name));
			el.setAttribute('onclick',"ListBody.select('" + i + "')");
			ligne.appendChild(el);
			list.appendChild(ligne);
			/* var armor = BODYS[i];
			 armor.id = i;
			 armor.name = BODYS_NAME[i].name
			 armor.gender = parseInt(data[1], 10);
			 armor.type = parseInt(data[2], 10);
			 armor.rarity = parseInt(data[3], 10);
			 armor.slots = parseInt(data[4], 10);
			 armor.defMin = parseInt(data[7], 10);
			 armor.defMax = parseInt(data[8], 10);
			 armor.resFire = parseInt(data[9], 10);
			 armor.resWater = parseInt(data[10], 10);
			 armor.resIce = parseInt(data[11], 10);
			 armor.resLightning = parseInt(data[12], 10);
			 armor.resDragon = parseInt(data[13], 10);
			 armor.skills = [];
			 armor.skillsNb = [];
			 for(var j = 0 ; j < 4 ; j++){
				 var idx = j*2;
				 if(data[14 + idx] != ''){
					 armor.skills.push(MockSkillMgr.getSkillWithNameRef(data[14 + idx]));
					 armor.skillsNb.push(parseInt(data[15 + idx], 10));
				 }
			 }
			 BODYS.push(armor);*/
		}
		return list;
	},
	select : function(index){
		ListBody.selectIdx = index;
		ListBody.actualiser();
	}
}