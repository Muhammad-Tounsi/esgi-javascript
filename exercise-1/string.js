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


function ordA(a) {
  return a.charCodeAt(0) - 65;
}
 
function vigenere(text, key, decode) {
  var i = 0, b;
  var output = " ";
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    output += String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
	console.log(output);
  });
}

//vigenere("wikipedia", "crypto");

function enVigenere(str,key) {
	key = key.toLowerCase();//make the key easier to work with
	while (key.length < str.length) {//extend the key longer than our string by appending it to itself
		key = key + key;
	}
	for (var i = 0, len = str.length; i < len; i++) {//for each letter in string
		if (str[i].match(/^[a-zA-Z]*$/gi) === null  ) {
			key = key.substr(0, i) + ' ' + key.substr(i);//if the letter in string isn't a-z or A-Z we insert a space at this spot in key, to preserve the key shit for the next real letter
		}
		var shift = key[i].charCodeAt(0)-96;//get our shift amount, if it is a space it will be negative, and the for loop won't run on this turn and the character is unchanged
		for (var j = 0; j < shift; j++) {//caesar shift the letter by shift amount
			if (str[i].match(/^[a-yA-Y]*$/gi) !== null  ) {
				str = str.replaceAt(i, String.fromCharCode(str[i].charCodeAt(0) + 1));
			}
			else if (str[i].match(/^[zZ]*$/gi) !== null  ) {
				str = str.replaceAt(i, String.fromCharCode(str[i].charCodeAt(0) - 25));
			}
		}
	}
	console.log(str);
}

enVigenere("wikipedia", "crypto");

