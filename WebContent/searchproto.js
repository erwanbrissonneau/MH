
function addSkill(){
	var x = document.createElement("SELECT");
	var id = document.getElementsByClassName('select').length+1; // id pour le select
	  x.setAttribute("id", id);
	  x.setAttribute("class","select");
	  
	  document.getElementById("topRegion").appendChild(x);
	  //valeur par defaut
	  var z = document.createElement("option");
	  z.setAttribute("value","");
	  var t = document.createTextNode("--");
	  z.appendChild(t);
	  document.getElementById(id).appendChild(z);
	  for (var i = 0 ; i < SKILLS.length ; i++) {
		  var armor = SKILLS[i];
		  var z = document.createElement("option");
		  z.setAttribute("value", i);
		  var t = document.createTextNode(armor.name);
		  z.appendChild(t);
		  document.getElementById(id).appendChild(z);
	  }
	  
}

function searchSkill(){
	var skills = document.getElementsByClassName('select');
	var nb = skills.length;
	var nbskill = 0;
	var tabSkill= [];
	var rarity = document.getElementById('rarity').value;
	
	 for (var i = 1 ; i <= nb ; i++) {
		 
		 var select = document.getElementById(i);
		 if(select.value != ''){
		  var skill = SKILLS[select.value];
		  nbskill ++;
		  if(tabSkill.indexOf(skill.idAbility)==-1 ){
		  tabSkill.push(skill.idAbility);
		  tabSkill.push(skill.points);
		  }else
			  if( tabSkill[(tabSkill.indexOf(skill.idAbility)+1)] < skill.points){
				  tabSkill.splice(tabSkill.indexOf(skill.idAbility)+1,1,skill.points);

			  }

		 }
	 }

	 nbgen(tabSkill);
}

//typeArmor[k].skills.indexOf(skill)!=-1 &

function armorFilter(rarity,typeArmor){
	var tab = [];
	for (var k = 0 ; k < typeArmor.length ; k++) {
		  if( typeArmor[k].rarity<= rarity & rarity-3<typeArmor[k].rarity){
			  tab.push(typeArmor[k]);

			 
		  }
	}
	return tab;
}




function nbgen(tabSkill){

	var rarity = document.getElementById('rarity').value;
	var tabgen = [];
	var tabHEADFilter = armorFilter(rarity,HEAD);
	var tabBODYFilter = armorFilter(rarity,BODYS);
	var tabARMSFilter = armorFilter(rarity,ARMS);
	var tabWAISTFilter = armorFilter(rarity,WAIST);
	var tabLEGSFilter = armorFilter(rarity,LEGS);
for (var i = 0 ; i < tabHEADFilter.length ; i++) {
	for (var j = 0 ; j < tabBODYFilter.length ; j++) {
			for (var k = 0 ; k < tabARMSFilter.length ; k++) {
				for (var l = 0 ; l < tabWAISTFilter.length ; l++) {
					for (var m = 0 ; m < tabLEGSFilter.length ; m++) {
						
						tabgen.push(tabHEADFilter[i]);
						creatBuild(tabHEADFilter[i],tabBODYFilter[j],tabARMSFilter[k],tabWAISTFilter[l],tabLEGSFilter[m],tabSkill);
						//if(tabSkill[0].points<=tabHEADFilter[i].skills){
							
						//}

					}
	
				}

			}

		}

	}
console.log();
console.log(tabHEADFilter[0].skillsNb);

}


function creatBuild(head,body,arms,waist,legs,tabSkill){
	var skills = [];
	var nbPoints = [];

	for(var i = 0 ; i < head.skills.length ; i++){
		alimSkill(skills, nbPoints, head.skills[i], head.skillsNb[i]);
	}
		
	
	for(var i = 0 ; i < body.skills.length ; i++){
		alimSkill(skills, nbPoints, body.skills[i], body.skillsNb[i]);
	}
	
	
	for(var i = 0 ; i < arms.skills.length ; i++){
		alimSkill(skills, nbPoints, arms.skills[i], arms.skillsNb[i]);
	}
	

	for(var i = 0 ; i < waist.skills.length ; i++){
		alimSkill(skills, nbPoints, waist.skills[i], waist.skillsNb[i]);
	}
	

	for(var i = 0 ; i < legs.skills.length ; i++){
		alimSkill(skills, nbPoints, legs.skills[i], legs.skillsNb[i]);
	}
	
	for(var i = 0 ; i < skills.length ; i++){
		skills[i].idAbility
		if(tabSkill.indexOf(skills[i].idAbility) !=- 1 ){
			if( nbPoints[tabSkill.indexOf(skills[i].idAbility)] >= tabSkill[1]){
				console.log("build vanish");
			}
	
		}
	}
}

var alimSkill = function(skills, nbPoints, skill, nbPoint){
	var idx = -1;
	for(var i = 0 ; i < skills.length ; i++){
		if(skills[i].idAbility == skill.idAbility){
			idx = i;
			break;
		}
	}
	if(idx == -1){
		skills.push(skill);
		nbPoints.push(nbPoint);
	}else{
		nbPoints[i] = nbPoints[i] + nbPoint;
	}
		
}

