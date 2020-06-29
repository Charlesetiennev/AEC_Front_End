var angleDeLaMain;
angleDeLaMain = prompt("Entrez l'angle de la main: ");

if(angleDeLaMain >=0 && angleDeLaMain <=39){
    document.write("Main fermée")
}
else if(angleDeLaMain >=40 && angleDeLaMain <=89){
    document.write("Main agrippe")
}
else if(angleDeLaMain>=90 && angleDeLaMain<=180){
    document.write("Main ouverte")
}
else {
    document.write("Le robot est hors de contrôle.")
}
