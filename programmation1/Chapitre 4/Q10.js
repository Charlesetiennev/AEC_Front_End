//Q10.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//

var options = ["INFORMATIQUE", "ADMINISTRATION","HISTOIRE","GENIE","GEOGRAPHIE","BUREAUTIQUE"];
var choix = prompt("Entrez une option pour verifier si le cours est offert: ").toUpperCase();
var existant=false;

for (var i=0;i<options.length;i++){
    if (choix===options[i]){
        existant= true;
    }
}

if (existant === true){
    document.write("Ce cours est disponible");
}
else {
    document.write("Desoler ce cours n'est pas offert.")
}