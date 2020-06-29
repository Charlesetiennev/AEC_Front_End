//Q12.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//
var reponse=[];
var corrige=[true,false,true,true,false,false,false,true,false,true];
var nbBonnesReponses = 0;


//Cree reponse de l'etudiant
for (var i=0;i<corrige.length;i++){
    reponse[i] = Boolean(Math.floor(Math.random()*2));
}

for (var j=0;j<corrige.length;j++){
    if (corrige[j] === reponse[j]){
        nbBonnesReponses++;
    }
}
document.write("Les Bonnes reponses sont: " + corrige + "<br>");
document.write("Letudiant a repondu : " + reponse + "<br>");
document.write("L'etudiant a eu " + nbBonnesReponses + " de bonnes reponses.");