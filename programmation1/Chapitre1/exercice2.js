//trouver les variables
var surfaceRectangle;
var longueurRectangle;
var largeurRectangle;

// lecture

largeurRectangle = Number(prompt("Entrez largeur du rectangle"));
longueurRectangle = Number(prompt("Entrez longueur du rectangle"));

//Calcul
surfaceRectangle = largeurRectangle*longueurRectangle;
console.log("La surface du rectangle est de : " + surfaceRectangle);