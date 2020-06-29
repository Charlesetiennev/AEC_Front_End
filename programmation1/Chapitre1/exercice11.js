//variables
var prixDeVenteNeufAvantTaxes;
var prixDeBase;
var fraisDeBase;
var profitConcessionnaire;
var montantPremiereTaxes;
var montantDeuxiemeTaxes;
var montantTotal;
//collecte donnees
//fait de base 2%
//profit concession 12%
//premier taxe 5% du sous-total du prix de base profit concession et frais de base
 //deuxieme taxe 9,975 brix de base frais de bse et profit du concession

prixDeBase= Number(prompt("Prix base du vehicule"));
fraisDeBase = prixDeBase/(100/2);
profitConcessionnaire = prixDeBase/(100/12);
prixDeVenteNeufAvantTaxes = prixDeBase + profitConcessionnaire + fraisDeBase;
montantPremiereTaxes = prixDeVenteNeufAvantTaxes/(100/5);
montantDeuxiemeTaxes = prixDeVenteNeufAvantTaxes/(100/9.975);
montantTotal = prixDeVenteNeufAvantTaxes + montantPremiereTaxes + montantDeuxiemeTaxes;
//Resultats
console.log("Prix de base de : " + prixDeBase);
console.log("Prix des frais: " + fraisDeBase);
console.log("Le prix de la commission: " + profitConcessionnaire);
console.log("Taxes 5%: " + montantPremiereTaxes);
console.log("Taxes 9.975%: " + montantDeuxiemeTaxes);
console.log("Montant total : " + montantTotal);
