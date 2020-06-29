var nb1;
var nb2;

nb1 = Number(prompt("Entrez un nombre: "));
nb2 = Number(prompt("Entrez un  deuxieme nombre: "));

if (nb2 != 0){
    document.write(nb1/nb2);
}
    else{
        document.write("Division par zero interdite")
}