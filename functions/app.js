function one() {
	return true;
}
console.log(one());

function chain(hello) {
	return hello;
}
console.log(chain("Salut"));

function twochain(chain1, chain2){
	return chain1 + " " + chain2
}
console.log(twochain("hello", "world"));