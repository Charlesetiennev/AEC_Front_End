//Q6.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//
// Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs
// (Pile ou Face). Vous décidez manuellement des valeurs qui seront dans le tableau
// (ce n’est pas random) et affichez ces valeurs à l’aide d’une boucle Pour.

var pileOuFace =["Pile","Pile","Pile","Pile","Pile","Face","Face","Face","Face","Face"];
var pile=0;
var face =0;

for (var i=0;i<=pileOuFace.length;i++){
    if (pileOuFace[i] ==="Pile"){
        pile++;
    }
    else{
        face++;
    }
}
document.write("Il y a eu : " + pile+" Nombre de fois pile<br>");
document.write("Il y a eu : " + face+" Nombre de fois face<br>");
