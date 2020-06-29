var pointsDeVieRestant;
var pointsAttaqueMadBull;
var pointsTauros;
if(pointsDeVieRestant >= 100){
    pointsAttaqueMadBull = 250;
    document.write("Les points d'attaques gagner de Mad Bull sont de :" + pointsAttaqueMadBull );
    pointsTauros = pointsTauros + pointsAttaqueMadBull;
}
else if(pointsDeVieRestant <=99 && pointsDeVieRestant >=80){
    pointsAttaqueMadBull = 200;
    document.write("Les points d'attaques gagner de Mad Bull sont de :" + pointsAttaqueMadBull );
    pointsTauros = pointsTauros + pointsAttaqueMadBull;
}
else if(pointsDeVieRestant <=79 && pointsDeVieRestant >=60){
    pointsAttaqueMadBull = 150;
    document.write("Les points d'attaques gagner de Mad Bull sont de :" + pointsAttaqueMadBull );
    pointsTauros = pointsTauros + pointsAttaqueMadBull;
}
else if(pointsDeVieRestant >60 && pointsDeVieRestant >0){
    pointsAttaqueMadBull = 100;
    document.write("Les points d'attaques gagner de Mad Bull sont de :" + pointsAttaqueMadBull );
    pointsTauros = pointsTauros + pointsAttaqueMadBull;
}

else{
    document.write("Le Pokemon n'est plus en etat de combattre.")
}

document.write(pointsTauros);

