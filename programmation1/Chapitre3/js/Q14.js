// Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.

var nombesFournis = Number(prompt("Veuillez entrez un nombres (0 pour terminer): "));
var nombresPositif = 0;
var nombresNegatif = 0;
while(nombesFournis !=0){
    while (nombesFournis>0){
        nombresPositif = nombresPositif+ nombesFournis;
        nombesFournis = Number(prompt("Veuillez entrez un nombres (0 pour terminer): "));
    }
    while (nombesFournis<0){
        nombresNegatif = nombresNegatif+ nombesFournis;
        nombesFournis = Number(prompt("Veuillez entrez un nombres (0 pour terminer): "));
    }

}

document.write("La sommes des nombres positif est de : " + nombresPositif+ "<br>" + "La somme des nombres negatifs est de : "+ nombresNegatif);