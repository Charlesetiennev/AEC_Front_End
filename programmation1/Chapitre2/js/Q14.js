var a ;
var b ;
var c ;

a = Number(prompt("Entrez un nombre: "));
b = Number(prompt("Entrez un nombre: "));
c = Number(prompt("Entrez un nombre: "));

if (a < b && a<c){
    if(b > c ){
        document.write("le plus petit chiffre est : " + a);
        document.write("Le plus grand chiffre est : " + b);
    }
        else{
        document.write("le plus petit chiffre est : " + a);
        document.write("Le plus grand chiffre est : " + c);
    }
}

else if (b < a && b<c){
    if ( a > c ){
        document.write("le plus petit chiffre est : " + b);
        document.write("Le plus grand chiffre est : " + a);
    }
        else{
        document.write("le plus petit chiffre est : " + b);
        document.write("Le plus grand chiffre est : " + c);
    }
}

else if (c < a && c < b ) {
    if(a > b){
        document.write("le plus petit chiffre est : " + c);
        document.write("Le plus grand chiffre est : " + a);
    }
        else{
        document.write("le plus petit chiffre est : " + c);
        document.write("Le plus grand chiffre est : " + b);
    }

}
else{
    document.write("Erreur");

}