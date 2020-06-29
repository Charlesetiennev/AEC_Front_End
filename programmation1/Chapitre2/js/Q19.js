//Lire le montant de vente et afficher
// le montant d’escompte correspondant sachant que le taux d’escompte est de 12%
// et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montantDeVente;
var montantEscompte;
var tauxEscompte;
var totalDeLaVente;

montantDeVente = Number(prompt("Entrez le total de l'acaht"));
tauxEscompte = 12/100;
if (montantDeVente >=500){
        montantEscompte = montantDeVente * tauxEscompte;
        totalDeLaVente = montantDeVente - montantEscompte;
        document.write("Le montant total s'eleve a : " + totalDeLaVente);

        document.write("Avec le taux descompte de douze pourcent vous avez economiser: " + montantEscompte);
}
else{
    document.write("Le montant total s'eleva a :" + montantDeVente + "Vous n'avez pas droit a lescompte");
}