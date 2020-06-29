//Q11.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//
// C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille possède et par la suite afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau.
//     Regrouper ensemble les 10 enfants et plus.

var tabRescencement = [0,0,0,0,0,0,0,0,0,0,0];

while(nbEnfantsDansFamille !== 666){
    var nbEnfantsDansFamille;
    nbEnfantsDansFamille = Number(prompt("Combien Avez-vous d'enfants? Entrez un Chiffre negatif pour arreter"));
    tabRescencement[nbEnfantsDansFamille]++;
}
document.write(tabRescencement);