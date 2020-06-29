// Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne
var compteur= 0;
for(i=1 ; i<=49 ;i+=2){
    document.write(i+" ");
    compteur++;
    if (compteur === 5){
        document.write("<br>");
        compteur =0;
    }
}
