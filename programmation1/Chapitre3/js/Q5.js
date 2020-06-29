// aire un programme qui affiche 100 nombres aléatoires 0 ou 1
// et compter le nombre de 0 et de 1.

// var compteur = 0;
// var nombreAleatoire = 0;
//
// while(nombreAleatoire != 5){
//     nombreAleatoire = Math.floor(Math.random() * 10 + 1);
//     compteur = compteur + 1;
// }

// var un = 0;
// var zero = 0;
// for (var i = 0; i<= 100; i++) {
//     nombresAleatoires =  Math.round(Math.random() );
//     document.write(nombresAleatoires);
//
// }

// document.write("    " + zero + "   " +un );


// if (nombresAleatoires === 1 && nombreAleatoire ===0){
//     un++;
//
// }
// else if(nombresAleatoires === 0 && nombreAleatoire === 1){
//     zero++;
// }


var nombreZero = 0;
var nombreUn = 0;
var nombre = 0;
for (var i=0; i< 100; i++){
    nombre = Math.floor(Math.random()*2);
    document.write(nombre);
    if (nombre===0){
        nombreZero++;
    }
    else {
        nombreUn++;
    }
}
    document.write("<br>Il y a eu :" + nombreZero +"zeros<br>");
    document.write("Il y a eu :" + nombreUn +"un<br>");
