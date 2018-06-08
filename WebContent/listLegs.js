
var ListLegs = {
	instance : null,
	isOpen : false,
	selectIdx : null,
	doShow : function(){
		if(!ListLegs.isOpen)
			ListLegs.open();
		else
			ListLegs.close();
	},
	open : function(){
		ListLegs.isOpen = true;
		ListLegs.actualiser();
	},
	close : function(){
		if(!ListLegs.isOpen)
			return;
		ListLegs.isOpen = false;
		
		var eastRegion = document.getElementById("eastRegion")
		while (eastRegion.firstChild) {
			eastRegion.removeChild(eastRegion.firstChild);
		}
		
		ListLegs.instance = null;
	},
	actualiser : function(){
		
		var eastRegion = document.getElementById("eastRegion")
		while (eastRegion.firstChild) {
			eastRegion.removeChild(eastRegion.firstChild);
		}
		
		var list = document.createElement("div");
		ListLegs.instance = list;
		list.appendChild(ListLegs.getHtmlList());
		document.getElementById("eastRegion").appendChild(list);
	},
	getHtmlList : function(){
		var list = document.createElement("lu");
		for (var i = 0 ; i < LEGS.length ; i++) {
			var armor = LEGS[i];
			var ligne = document.createElement("li");
			var el = document.createElement("span");
			el.style.cursor = 'pointer';
			if(ListLegs.selectIdx != null && ListLegs.selectIdx == i)
				el.style.color = 'red';
			el.appendChild(document.createTextNode(armor.name));
			el.setAttribute('onclick',"ListLegs.select('" + i + "')");
			ligne.appendChild(el);
			list.appendChild(ligne);
			/* var armor = LEGS[i];
			 armor.id = i;
			 armor.name = LEGS_NAME[i].name
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
			 LegsS.push(armor);*/
		}
		return list;
	},
	select : function(index){
		var topHeadRegion = document.getElementById("topLegsRegion");
		while (topHeadRegion.firstChild) {
			topHeadRegion.removeChild(topHeadRegion.firstChild);
		}
		topHeadRegion.appendChild(document.createTextNode(LEGS[index].name));
		
		ListLegs.selectIdx = index;
		ListLegs.actualiser();
	}
}
