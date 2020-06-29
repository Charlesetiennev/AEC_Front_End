//variables
var noteMiSession;
var noteFinale;
var noteLabo;
var resultatFinale;

//collectDonnes
noteMiSession = Number(prompt("Entrez note de mi-session"));
noteFinale = Number(prompt("Entrez note finale"));
noteLabo = Number(prompt("Entrez note du labe"));

//calcul

noteMiSession = noteMiSession/30;
noteFinale = noteFinale*(50/100);
noteLabo = noteLabo*(20/100);
resultatFinale = noteMiSession + noteFinale + noteLabo;

//Resultat
console.log("La note finale est de: " + resultatFinale + "%");