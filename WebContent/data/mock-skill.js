 var SKILLS = [];

 /**
  * id,idSkill,skill,ability,points,type012
  */

for (var i = 0 ; i < SKILLS_BRUT.length ; i++) {
  var data = SKILLS_BRUT[i].split(',');
  var skill = {};
  skill.id =  parseInt(data[0], 10);
  skill.idAbility =  parseInt(data[1], 10);
  skill.name = SKILLS_NAME[skill.id].name;
  skill.nameAbility = ABILITY_NAME[skill.idAbility].name;
  skill.points = parseInt(data[4], 10);
  skill.type = parseInt(data[5], 10);
  
  //Pour faire le lien avec les armures
  skill.refName = data[2];
  skill.refNameAbility = data[3];
  SKILLS.push(skill);
}

var MockSkillMgr = {
	getSkillWithNameRef : function(refNameAbility){
		for(var i = 0 ; i < SKILLS.length ; i++){
			if(SKILLS[i].refNameAbility == refNameAbility)
				return SKILLS[i];
		}
		console.log('not found skill ability : ' + refNameAbility);
		return {name : 'not found : ' + refNameAbility};
	}
};