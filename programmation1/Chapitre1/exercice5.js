//trouver les variables
var nom;
var age;
var nombreJourAnnee;
var jourDeVieApprox;

//collecte de donnees
nom = String(prompt("Entrez votre nom: "));
age = Number(prompt("Entrez votre age: "));
nombreJourAnnee = 365;

//calcul
jourDeVieApprox = nombreJourAnnee*age ;

//resultat
console.log(nom + "vous avez approximativement " + jourDeVieApprox +"Jours de vie vecu");
