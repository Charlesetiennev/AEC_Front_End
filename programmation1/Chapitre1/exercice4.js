//trouver les variables
var salaireBrut;
var tauxALheure;
var nombresHeuresTravaille;

//demande de taux et nombres heures travaille
tauxALheure = Number(prompt("Taux horaire de l'heure: "));
nombresHeuresTravaille = Number(prompt("Nombres d'heures de travail"));

//calculs

salaireBrut = tauxALheure*nombresHeuresTravaille;

//resultat
console.log("Le salaire brut de votre employe est de : " + salaireBrut);