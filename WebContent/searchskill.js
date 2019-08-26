var skillTab=[];

var ListSkillsSelect = {
	instance : null,
	isOpen : false,
	selectIdx : null,
	doShow : function(){
		if(!ListSkillsSelect.isOpen)
			ListSkillsSelect.open();
		else
			ListSkillsSelect.close();
	},
	open : function(){
		ListSkillsSelect.isOpen = true;
		ListSkillsSelect.actualiser();
	},
	close : function(){
		if(!ListSkillsSelect.isOpen)
			return;
		ListSkillsSelect.isOpen = false;
		
		var eastRegion = document.getElementById("eastRegion")
		while (eastRegion.firstChild) {
			eastRegion.removeChild(eastRegion.firstChild);
		}
		
		ListSkillsSelect.instance = null;
	},
	actualiser : function(){
		
		var eastRegion = document.getElementById("eastRegion")
		while (eastRegion.firstChild) {
			eastRegion.removeChild(eastRegion.firstChild);
		}
		
		var list = document.createElement("div");
		ListSkillsSelect.instance = list;
		list.appendChild(ListSkillsSelect.getHtmlList());
		document.getElementById("eastRegion").appendChild(list);
	},
	getHtmlList : function(){
		var list = document.createElement("lu");
		for (var i = 0 ; i < SKILLS.length ; i++) {
			var armor = SKILLS[i];
			var ligne = document.createElement("li");
			var el = document.createElement("span");
			el.style.cursor = 'pointer';
			if(ListSkillsSelect.selectIdx != null && ListSkillsSelect.selectIdx == i)
				el.style.color = 'red';
			el.appendChild(document.createTextNode(armor.name));
			el.setAttribute('onclick',"ListSkillsSelect.select('" + i + "')");
			ligne.appendChild(el);
			list.appendChild(ligne);
		}
		return list;
	},
	select : function(index){
		var skillNum = null;
		if(document.getElementById("1").hasFocus){
			skillNum = "s1";
		}else{
			skillNum = "s2";
		}
		var topHeadRegion = document.getElementById(skillNum);
		while (topHeadRegion.firstChild) {
			topHeadRegion.removeChild(topHeadRegion.firstChild);
		}
		topHeadRegion.appendChild(document.createTextNode(SKILLS[index].name));
		console.log(document.getElementById("1").isOpen);
		ListBody.selectIdx = index;
		ListSkillsSelect.actualiser();
		
	}
}
