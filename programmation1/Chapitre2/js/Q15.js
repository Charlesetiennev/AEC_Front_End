var surfaceRectangle;
var perimetreRectangle;
var longeur;
var largeur;

longeur = Number(prompt("Entrez la longeur du rectangle: "));
largeur = Number(prompt("Entrez la largeur du rectangle: "));
perimetreRectangle = (2*largeur) + (2*longeur);

if (perimetreRectangle >= 100){
    surfaceRectangle = longeur*largeur;
    document.write("La surface total est de : " + surfaceRectangle);
}

else {
    document.write("Erreur");
}