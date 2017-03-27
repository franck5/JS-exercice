
var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(mois[2]);
console.log(mois[4]);
console.log(mois[10]);
mois.splice(7, 1, "août");
for(var i = 0;i <= mois.length;i++){
	console.log(mois[i])
}

var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
array.push('Courgette');
array[4].push('Citron');
array.splice(1,1);
array.splice(2, 0, 'Poire');

for(var i = 0;i <= array.length;i++){
	console.log(array[i])
}
