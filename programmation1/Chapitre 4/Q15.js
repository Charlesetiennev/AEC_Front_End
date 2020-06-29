//Q15.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//

var tableau = [];
var nb1,nb2,temporaire;

for (var i=0;i<15;i++){
    tableau[i] = Math.floor(Math.random()*11);

}
document.write(tableau + "<br>");
nb1 = Number(prompt("Quelle indice voulez-vous echanger dans le tableau? "));
nb2 = Number(prompt("Quelle indice voulez-vous echanger dans le tableau? "));
temporaire = tableau[nb1];
tableau[nb1] = tableau[nb2];
tableau[nb2] = temporaire;
document.write(tableau);