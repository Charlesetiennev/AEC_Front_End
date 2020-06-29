var avancer = "w";
var gauche = "a";
var droite = "d";
var  reculer = "s";

var mouvement = prompt("Entrez w ou a ou s ou d");

if(mouvement === "w"){
    document.write("Avancer");
}
    else if (mouvement === "a"){
        document.write("Gauche");
}
        else if (mouvement === "d"){
            document.write("Droite");
}
            else if (mouvement === "s"){
                document.write("Reculer");
}
                else{
                    document.write("Erreur");
}