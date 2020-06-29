//document.write("<p>C'est pas humain! <strong class='texteRouge'>" + temperature +"</strong></p>");

var sexe;
var age;
var prixVehicule = 10000;
var assurance;

age = Number(prompt("Entrez l'age du conducteur: "));
sexe = prompt("H (homme) ou F (femme)");
if (sexe.toUpperCase() === "H"){
    if (age <25){
        assurance = prixVehicule *(5/100);
        document.write("<p class='vert'>Le prix d'assurance pour un vehicule a dix milles dollards est de " + assurance+"</p>");
}
    else{
        assurance = prixVehicule *(3/100);
        document.write ( "<p class='vert'>Le prix d'assurance pour un vehicule a dix milles dollards est de :" + assurance +"</p>");
}

}
        else if  (sexe.toUpperCase() === "F") {
    if (age < 25) {
        assurance = prixVehicule * (3 / 100);
        document.write( "<p class='magenta'>Le prix d'assurance pour un vehicule a dix milles dollards est de :" + assurance +"</p>");
    } else {
        assurance = prixVehicule * (2 / 100);
        document.write("<p class='magenta'>Le prix d'assurance pour un vehicule a dix milles dollards est de :" + assurance + "</p>");
    }
}
        else {
            document.write("Il y a une erreur");
}


// var prixAssurance;
// var sexe;
// var age;
// var valeurVehicule;
// var taux;
//
// sexe = prompt("Entrez votre sexe: G ou F");
// age = Number(prompt("Entrez votre age: "));
// valeurVehicule = Number(prompt("Entrez le prix du vehicule: "));
//
// sexe = sexe.toUpperCase();
//
// if (sexe === "M"){
//     if(age >=16 && age <=25){
//         taux = .05;
//     }
//     else if(age >25){
//         taux = .03;
//     }
//     else{
//         document.write("Vous ne pouvez pas conduire.");
//     }
// }
// else if (sexe ==="F"){
//     if(age >=16 && age <=25){
//         taux = .03;
//     }
//     else if(age >25){
//         taux = .02;
//     }
//     else{
//         document.write("Vous ne pouvez pas conduire.");
//     }
// }
//
// prixAssurance = valeurVehicule * taux;
//
// document.write("Le prix des assurances est de :" + prixAssurance);