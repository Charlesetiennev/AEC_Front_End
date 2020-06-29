//variables
var article1;
var article2;
var article3;
var dateAchat;
var tps;
var tvq;
var montantTotalAvantTaxes;
var montantTotalApresTaxes;

//collecte de donnees

dateAchat = Number(prompt("Entrez la date dachat: "));
article1 = Number(prompt("Entrez le prix de votre premier article: "));
article2 = Number(prompt("Entrez le prix de votre deuxieme article: "));
article3 = Number(prompt("Entrez le prix de votre troisieme article: "));

//calculs
montantTotalAvantTaxes = article1 + article2 + article3;
tps =  montantTotalAvantTaxes/(100/5);
tvq = montantTotalAvantTaxes/(100/9.975);
montantTotalApresTaxes = montantTotalAvantTaxes + tps + tvq;

//resultats
console.log("Vous avez achete le : " + dateAchat);
console.log("Pour un total avant taxe de : " +montantTotalAvantTaxes );
console.log("Pour un total de : " +  montantTotalApresTaxes + " Apres taxes.");
console.log("Le prix de la TVQ est de : " + tvq);
console.log("Le prix de la TPS est de : " + tps);


