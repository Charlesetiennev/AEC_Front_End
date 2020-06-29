var controleur;
var moteur;
var cameraUSB;
var matriceLED;
var filament3D;
var batterieUSB;
var prixTotal;
var prixAvecLivraison;
var nomControleur;
var nombreMoteur;
var cameraOuNon;
var matriceLEDOuNon;
controleur = Number(prompt("Voulez vous un Raspberry PI (1) ou le Raspberry PI ZERO(2)"));
moteur = Number(prompt("Entrez le nombre de moteur désirer en 2 et 24"));
cameraUSB = prompt("Souhaité vous avoir une caméra USB OUI(O) : NON(N):" );
matriceLED = prompt("Souhaité vous avoir une matrice LED OUI(O) : NON(N):" );
filament3D = 20;
batterieUSB = 15;
//Controleur
if(controleur === 1){
    controleur = 55;
    nomControleur = "Raspberry PI ";
}
else if(controleur === 2){
    controleur = 15;
    nomControleur = "Raspberry PI ZERO ";
}
else{
    document.write("Il y a erreur.")
}
//Moteur
if (moteur >=2 && moteur <=24){
    nombreMoteur = moteur;
    moteur = moteur*5;
}
else {
    document.write("Il y a erreur.")
}
//camera USB
cameraUSB= cameraUSB.toUpperCase();

if(cameraUSB === "O"){
    cameraUSB = 35;
    cameraOuNon = " ,Camera USB ";
}
else if (cameraUSB === "N"){
    cameraUSB = 0;
    cameraOuNon = " ,sans camera USB "
}
else {
    document.write("Il y a erreur.")
}
//Matrice LED
matriceLED = matriceLED.toUpperCase();

if(matriceLED === "O"){
    matriceLED = 10;
    matriceLEDOuNon = ", matrice LED ";
}
else if (matriceLED === "N"){
    matriceLED = 0;
    matriceLEDOuNon = " ,sans matrice LED ";
}
else{
    document.write("Il y a erreur.")
}

prixTotal = controleur + moteur + cameraUSB + matriceLED + filament3D + batterieUSB;
prixAvecLivraison = prixTotal*(.15) + prixTotal;
document.write("Vous avez commander un : " + nomControleur + "Avec "+ nombreMoteur + " Moteurs, " + cameraOuNon + matriceLEDOuNon);
document.write("          ");
document.write("Le prix total de votre commande est de : " + prixTotal + "$");
document.write("          ");
document.write("Le prix total de votre commande avec la livraison de 15% est de : " +prixAvecLivraison + "$");
