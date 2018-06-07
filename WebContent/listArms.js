
var ListArms = {
	instance : null,
	isOpen : false,
	selectIdx : null,
	doShow : function(){
		if(!ListArms.isOpen)
			ListArms.open();
		else
			ListArms.close();
	},
	open : function(){
		ListArms.isOpen = true;
		ListArms.actualiser();
	},
	close : function(){
		ListArms.isOpen = false;
		document.getElementById("eastRegion").removeChild(ListArms.instance);
		ListArms.instance = null;
	},
	actualiser : function(){
		if(ListArms.instance != null)
			document.getElementById("eastRegion").removeChild(ListArms.instance);
		var list = document.createElement("div");
		ListArms.instance = list;
		list.appendChild(ListArms.getHtmlList());
		document.getElementById("eastRegion").appendChild(list);
	},
	getHtmlList : function(){
		var list = document.createElement("lu");
		for (var i = 0 ; i < ARMS.length ; i++) {
			var armor = ARMS[i];
			var ligne = document.createElement("li");
			var el = document.createElement("span");
			el.style.cursor = 'pointer';
			if(ListArms.selectIdx != null && ListArms.selectIdx == i)
				el.style.color = 'red';
			el.appendChild(document.createTextNode(armor.name));
			el.setAttribute('onclick',"ListArms.select('" + i + "')");
			ligne.appendChild(el);
			list.appendChild(ligne);
			/* var armor = ARMS[i];
			 armor.id = i;
			 armor.name = ARMS_NAME[i].name
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
			 ArmsS.push(armor);*/
		}
		return list;
	},
	select : function(index){
		ListArms.selectIdx = index;
		ListArms.actualiser();
	}
}
