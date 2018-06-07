 var WAIST = [];

/**
 * Name,gender012,type012,rarity,slots,hr,ve,def,max def,fire,water,ice,lightning,dragon,skill1,#,skill2,#,skill3,#,skill4,#,skill5,#,mat1,#,mat2,#,mat3,#,mat4,#
 */

for (var i = 0 ; i < WAIST_BRUT.length ; i++) {
  var data = WAIST_BRUT[i].split(',');
  var armor = {};
  armor.id = i;
  armor.name = WAIST_NAME[i].name
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
  WAIST.push(armor);
}
