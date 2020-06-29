//Q13.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//
var tableau = [];
var trouver = false;

for (var i=0;i<12;i++){
    tableau[i] = Math.floor(Math.random()*11);
}

for (var j=0;j<tableau.length-1;j++){
    if (tableau[j] + tableau[11] === 15){
        document.write("Le nombre a la position :" + j + " = " +
        tableau[j] + " + le nombre " + tableau[11] + " = 15<br>");
            trouver = true;

    }
}

if (!trouver){
    document.write("Aucune Solution!<br>");
}
document.write(tableau);