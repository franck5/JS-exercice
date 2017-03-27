var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(mois[2]);
console.log(mois[4]);
console.log(mois[10]);
mois.splice(7, 1, "août");
console.log(mois);

var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
array.push('Courgette');
console.log(array);
