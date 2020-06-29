var nombre;

nombre = Number(prompt("Entrez un numero"));

if (nombre <0) {
    document.write("Ceci est un nombre negatif.");
}
    else if (nombre >0){
        document.write("Ceci est un nombre positif");
}
        else{
            document.write("Vous avez entrez le zero");
}