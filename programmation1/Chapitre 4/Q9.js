//Q9.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//
// Lire 10 nombres quelconques et les placer dans un tableau.
//  Par la suite, trouver le plus petit et le plus grand de ces nombres.

var tableau = [];
var max = 0;
var min = 100000;

for (var i=0;i<10;i++){
    tableau[i] = Math.floor(Math.random()*1001);
}

for (var j=0;j<10;j++){
    if (tableau[j] < min){
        min = tableau[j];
    }
    if (tableau[j]>max){
        max = tableau[j];
    }
}
document.write(tableau + "<br>");
document.write("Le minimum est " + min + "<br>");
document.write("Le maximum est " + max);
