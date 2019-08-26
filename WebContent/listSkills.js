var skillTab=[];

var ListSkills = {
	instance : null,
	isOpen : false,
	selectIdx : null,
	doShow : function(){
		if(!ListSkills.isOpen)
			ListSkills.open();
		else
			ListSkills.close();
	},
	open : function(){
		ListSkills.isOpen = true;
		ListSkills.actualiser();
	},
	close : function(){
		if(!ListSkills.isOpen)
			return;
		ListSkills.isOpen = false;
		
		var eastRegion = document.getElementById("eastRegion")
		while (eastRegion.firstChild) {
			eastRegion.removeChild(eastRegion.firstChild);
		}
		
		ListSkills.instance = null;
	},
	actualiser : function(){
		
		var eastRegion = document.getElementById("eastRegion")
		while (eastRegion.firstChild) {
			eastRegion.removeChild(eastRegion.firstChild);
		}
		
		var list = document.createElement("div");
		ListSkills.instance = list;
		list.appendChild(ListSkills.getHtmlList());
		document.getElementById("eastRegion").appendChild(list);
	},
	getHtmlList : function(){
		var list = document.createElement("lu");
		for (var i = 0 ; i < SKILLS.length ; i++) {
			var armor = SKILLS[i];
			var ligne = document.createElement("li");
			var el = document.createElement("span");
			el.style.cursor = 'pointer';
			if(ListSkills.selectIdx != null && ListSkills.selectIdx == i)
				el.style.color = 'red';
			el.appendChild(document.createTextNode(armor.name));
			el.setAttribute('onclick',"ListSkills.select('" + i + "')");
			ligne.appendChild(el);
			list.appendChild(ligne);
		}
		return list;
	},
	select : function(index){
		skillTab.push(SKILLS[index]);
		var skill = document.getElementById("skillTab");
		while (skill.firstChild) {
			skill.removeChild(skill.firstChild);
		}
		for(var i=0 ; i<skillTab.length ;i++){
			var row = document.createElement("tr");
			var cell = document.createElement("td");
			cell.appendChild(document.createTextNode(skillTab[i].name));
			row.appendChild(cell);
			skill.appendChild(row);
		
		}
		console.log(skillTab);
		console.log(SKILLS[index].nameAbility);
		ListSkills.selectIdx = index;
		

			var result = SKILLS.filter(word => word.nameAbility == SKILLS[index].nameAbility).length;

		for(var i=0 ; i<result ;i++){
		SKILLS.splice(SKILLS.indexOf(SKILLS[index]),1);
		}
		ListSkills.actualiser();
		
	}
}
