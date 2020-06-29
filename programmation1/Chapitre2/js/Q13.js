var nbA;
var nbB;

nbA = Number(prompt("Entrez le nombre A : "));
nbB = Number(prompt("Entrez le nombre B : "));

if (nbA > nbB){
    document.write("Le A =  grand numero : " + nbA);
    document.write("Le B =  plus petit numero: " + nbB );

}
    else if (nbA < nbB){
    document.write("Le B = grand numero : " + nbB);
    document.write("Le A =  plus petit numero : " + nbA );
}
    else{
        document.write("Erreur");
}
