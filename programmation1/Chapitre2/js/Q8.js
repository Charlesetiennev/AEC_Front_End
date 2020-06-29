var heureHoraire;
var tauxHoraire;
var heureSupplementaire;
var tauxHeureSupplementaire;
var salaireTotal;
var heureTempsSimple;

tauxHoraire = 15;
tauxHeureSupplementaire = tauxHoraire * 1.5;
heureHoraire = Number(prompt("Entrez le nombre d'heure de travail: "));

if (heureHoraire < 40){
    salaireTotal = heureHoraire*tauxHoraire;
    document.write("Le salaire est de :" +  salaireTotal)
}
    else if (heureHoraire > 40){
    heureTempsSimple = tauxHoraire *40 ;
    heureSupplementaire = heureHoraire - 40;
    heureSupplementaire = tauxHeureSupplementaire * heureSupplementaire;
    salaireTotal = heureHoraire + heureSupplementaire;
    document.write("Le salaire total pour la semaine est de : " + salaireTotal);
    document.write("Le total pour l'heure supplementaire est de : " + heureSupplementaire)

}
