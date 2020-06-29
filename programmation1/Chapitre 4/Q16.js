//Q16.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//

var tableau = [2,4,6,8,10,12,14,16,18,20];
var nouvellevaleur,temporaire1,temporaire2;
var nbPlacer = false;

document.write(tableau + "<br><br>");

nouvellevaleur = Math.floor(Math.random()*22);
    document.write("On doit ajoute :" + nouvellevaleur + " Au tableau ");


for (var i=0;i<tableau.length;i++) {
    if (nbPlacer) {
    temporaire2=tableau[i];
    tableau[i] = temporaire1;
    temporaire1 = temporaire2
    }
}


