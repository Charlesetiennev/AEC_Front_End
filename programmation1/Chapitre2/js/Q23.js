//L'indice de pollution varie de 0 à 1. Une valeur comprise entre 0,04 et 0,31 est dite normale.
// Si sa valeur de l’indice dépasse 0,31 les industries de la liste A
// sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale.
// Si l’indice excède 0,40, on avise également la liste B et s’il excède 0,50, on avise aussi les industries de la liste C.
// Pour toutes les autres valeurs, écrire « Valeur impossible ».
//
// Faire le programme qui lit la valeur de l’indic
// e de pollution atmosphérique et indique quelle liste devrait être affichée.

var indiceDePollution;
var listeA = 0;
var listeB = 0;
var listeC = 0;

indiceDePollution = Number(prompt("Entrez l'indice de pollution: "));

if(indiceDePollution >= 0.04 && indiceDePollution <=0.31){
    document.write("L'indice est dite \"NORMAL\"")
}
else if(indiceDePollution >0.31 && indiceDePollution <0.40){
    document.write("La liste A sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale.")
}
else if(indiceDePollution >=0.50 && indiceDePollution <0.50){
    document.write("La liste A et B sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale.")
}
else if(indiceDePollution >= .50 && indiceDePollution <=1){
    document.write("La liste A, B et C sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale.")
}
else{
    document.write("Valeur Impossible")
}