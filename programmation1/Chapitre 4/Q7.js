//Q7.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//

var tabVraiOuFaux = [];
var nbVrais = 0;
var nbFaux = 0;

for (var i =0;i<1000;i++){
    tabVraiOuFaux[i] = Boolean(Math.floor(Math.random()*2));
    console.log(tabVraiOuFaux[i]);
    if(tabVraiOuFaux[i] === true){
        nbVrais++;
    }
    else{
        nbFaux++;
    }
}

document.write("Il y a "+nbVrais+" Vrais;");
document.write("Il y a "+nbFaux+" Faux;");

if (nbVrais>nbFaux){
    document.write("Il y a plus de vrais")
}
else{
    document.write("Il y a plus de faux")
}