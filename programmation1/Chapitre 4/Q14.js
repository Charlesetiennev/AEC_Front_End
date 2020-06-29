//Q14.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//

var tableau =[];
var trouver = false;

for (var i =0;i<12;i++){
    tableau[i] = Math.floor(Math.random()*11);
}

for (var j=0;j<tableau.length;j++){
    for (var k=0;k<tableau.length;k++){
        if ((tableau[j] + tableau[k])===15){
            document.write("Le nombre a la position: "+ j+ " = "+ tableau[j]+
            " Le nombre a la position:" + k + " = " + tableau[k] + " Pour un total de 15<br>");
                trouver = true;
        }
    }
}
if (!trouver){
    document.write("Auncune solution! <br>");
}
document.write(tableau);