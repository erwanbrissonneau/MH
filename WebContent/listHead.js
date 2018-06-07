
var ListHead = {
	instance : null,
	isOpen : false,
	selectIdx : null,
	doShow : function(){
		if(!ListHead.isOpen)
			ListHead.open();
		else
			ListHead.close();
	},
	open : function(){
		ListHead.isOpen = true;
		ListHead.actualiser();
	},
	close : function(){
		ListHead.isOpen = false;
		document.getElementById("eastRegion").removeChild(ListHead.instance);
		ListHead.instance = null;
	},
	actualiser : function(){
		if(ListHead.instance != null)
			document.getElementById("eastRegion").removeChild(ListHead.instance);
		var list = document.createElement("div");
		ListHead.instance = list;
		list.appendChild(ListHead.getHtmlList());
		document.getElementById("eastRegion").appendChild(list);
	},
	getHtmlList : function(){
		var list = document.createElement("lu");
		for (var i = 0 ; i < HEAD.length ; i++) {
			var armor = HEAD[i];
			var ligne = document.createElement("li");
			var el = document.createElement("span");
			el.style.cursor = 'pointer';
			if(ListHead.selectIdx != null && ListHead.selectIdx == i)
				el.style.color = 'red';
			el.appendChild(document.createTextNode(armor.name));
			el.setAttribute('onclick',"ListHead.select('" + i + "')");
			ligne.appendChild(el);
			list.appendChild(ligne);
			/* var armor = HEAD[i];
			 armor.id = i;
			 armor.name = HEAD_NAME[i].name
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
			 HeadS.push(armor);*/
		}
		return list;
	},
	select : function(index){
		ListHead.selectIdx = index;
		ListHead.actualiser();
	}
}
