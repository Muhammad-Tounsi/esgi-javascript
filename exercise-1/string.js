function ucfirst(str){
	if(str.length > 0) {
		var min = str.toLowerCase();
		console.log(min[0].toUpperCase() + min.substring(1));
	}else {
		console.log(str);
	}
}

//ucfirst("hello world");

function capitalize(str1){
	if(str1.length > 0) {
		str1 = str1.split(" ");
		for (var i = 0, x = str1.length; i < x; i++){
			str1[i] = str1[i][0].toUpperCase() + str1[i].substring(1);
		}
		
		var res = str1.join(" ");
		return res;
	}
}

//capitalize("hello world");

function camelCase(str){
	var capit = capitalize(str);
	var spl = capit.split(" ").join("");
	
	console.log(spl);
}

//camelCase("hello world");

function snakeCase(str2){
	if(str2.length > 0){
		var min = str2.toLowerCase();
		var spl2 = min.split(" ").join("_");
		
		console.log(spl2);
	}
}

//snakeCase("HELLO WORLD TEST");

function leet(str3){
	var motLeet = "";
	var lower = str3.toLowerCase();
	if(str3.length > 0){
		for(var i = 0; i < str3.length; i++){
			if(lower[i] ==="a"){
				motLeet += "4";
			}else if (lower[i] === "e"){
				motLeet += "3";
			}else if (lower[i] === "i"){
				motLeet += "1";
			}else if (lower[i] === "o"){
				motLeet += "0";
			}else if (lower[i] === "u"){
				motLeet += "(_)";
			}else if (lower[i] === "y"){
				motLeet += "7";
			}else{
				motLeet += lower[i];
			}
		}
		console.log(motLeet);
	}
}

//leet("Anaconda");

function prop_access(str){
	
}

function verlan(str4){
	if(str4.length > 0){
		var res = str4.split("").reverse().join("");
		var inverse = res.split(" ").reverse().join(" ");
		console.log(inverse);
	}
}

//verlan("hello world");


function yoda(str) {
	if(typeof str === "string") {
        console.log(str.split(" ").reverse().join(" "));
    }
}
//yoda("Hello World");

function vig(input, key) {
    array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    output = "";
    for (var i = 0; i < input.length; i++){
        output += array[(array.indexOf(key[i % key.length]) + array.indexOf(input[i])) % 26];
    }
    return output;
}

//console.log(vig("wikipedia", "crypto"));