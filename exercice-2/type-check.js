function type_check_v1(value, type){
	if(typeof value === type || value instanceof Object || value instanceof Array){
		return true;
	}
	else{
		return false;
	}
}

console.log(type_check_v1(1, "number"));

function type_check_v2(valeur, confType){
	if(confType.hasOwnProperty('type'){
		if(confType.hasOwnProperty('value'){
			return confType.value == valeur;
		}
		else if(type_check_v1(valeur, confType)){
			return true;
		}
	//return false;
	}
	else if(confType.hasOwnProperty('enum')){
		if(confType.enum.includes(valeur)){
			return true;
		}
	}
}

