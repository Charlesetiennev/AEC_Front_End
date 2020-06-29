// Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer)
// . Afficher combien de nombres
// positifs ont été entrés ainsi que combien de nombres
// négatifs ont été entrés.

var nombesFournis = Number(prompt("Veuillez entrez un nombres (0 pour terminer): "));
var nombresPositif = 0;
var nombresNegatif = 0;
while (nombesFournis!=0){
    while (nombesFournis>0){
        nombresPositif++;
        nombesFournis = Number(prompt("Veuillez entrez un nombres (0 pour terminer): "));
    }
    while (nombesFournis<0){
        nombresNegatif++;
        nombesFournis = Number(prompt("Veuillez entrez un nombres (0 pour terminer): "));
    }
}
document.write("Vous avez entrer : " + nombresPositif+ " Nombres positif, <br>" + "Vous avez  entrer: "+ nombresNegatif + " Nombres negatifs");