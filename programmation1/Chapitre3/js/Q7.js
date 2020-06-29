// demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
//     Comptez et affichez le nombre de mots entrés avant le mot patate.

var motAEntrer= prompt("Entrez le mot patate");
var motPatate = "PATATE";
var compteur = 1;
while (motAEntrer.toUpperCase() !== motPatate){
    motAEntrer= prompt("Entrez le mot patate");
    compteur++;
}
document.write("Vous avez reussie en :"+compteur+" fois.");
