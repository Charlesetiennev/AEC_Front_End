var tableau =[1,2,3,4,5,6,7,8,9];
var aleatoire,temporaire;

document.write(tableau + "<br>");
for (var i=0;i<tableau.length;i++){
    aleatoire = Math.floor(Math.random()*9);
    temporaire = tableau[i];
    tableau[i] = tableau[aleatoire];
    tableau[aleatoire] = temporaire;
}

document.write(tableau + "<br>");