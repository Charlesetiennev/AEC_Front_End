// Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombre


for(var nombres = 1 ;nombres<=10; nombres++){
    var carree= Math.pow(nombres, 2);
    var cube= Math.pow(nombres, 3);
    document.write("Le nombres :"+ nombres +" a la valeur :" + carree+" au carre et la valeur: "+ cube +" Comme cube<br>")
}