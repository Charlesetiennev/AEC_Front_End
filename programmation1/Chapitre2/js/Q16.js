var nb1;
var nb2;
var somme;
var produit;
nb1 = Number(prompt("Entrez un Nombre: "));
nb2 = Number(prompt("Entrez un deuxieme nombre : "));

if (nb1 >=10 && nb2 >=10){
    somme = nb1 + nb2;
    document.write("La somme de vos nombres est de : " + somme);
}
else if (nb1 < 10 && nb2 < 10){
    produit = nb1 * nb2;
    document.write("Le produit de vos nombres est de : " + produit);
}
else if (nb1 >10 && nb2 <10){
    var difference;
    difference = nb1 - nb2 ;
    document.write("La difference entre vos nombres est de : " + difference);
}

else{
    var difference2;
    difference2 = nb2 - nb1;
    document.write("La difference entre vos nombres est de : " + difference2);
}