function one() {
	return true;
}
	console.log(one());


function chain(hello) {
	return hello;
}
	console.log(chain("Salut"));


function twochain(chain1, chain2){
	return chain1 + " " + chain2;
}
	console.log(twochain("hello", "world"));


function comparenumber(number1, number2){
	if (number1 > number2) {
		return "Le premier nombre est plus grand";
	}
	else if(number1 < number2){
		return "Le premier nombre est plus petit";
	}
	else{
		return "Les deux nombres sont identiques";
	}
}

function chainnumber(chain, number){
		return chain + " " + number;
	}
	console.log(chainnumber("vitesse =", 40));

function infos(nom, prenom, age){
	return "Bonjour " + nom + " " + prenom + ",tu as " + age + "ans";

}
	console.log(infos("Dubech", "Franck", 22));