var janvier = 1;
var fevrier = 2;
var mars = 3;
var avril = 4;
var mai = 5;
var juin = 6;
var juillet = 7;
var aout = 8;
var septembre = 9;
var octobre = 10;
var novembre = 11;
var decembre = 12;

var mois;

mois = Number(prompt("Entrez un chiffre plus petit ou egal a 12"));

if (mois ===1){
    document.write("Janvier");
}

    else if (mois ===2){
    document.write("Fevrier");
}
        else if (mois ===3){
        document.write("Mars");
}
            else if (mois ===4){
            document.write("Avril");
}
                else if (mois ===5){
                document.write("Mai");
}

                    else if (mois ===6){
                    document.write("Juin");
}
                        else if (mois ===7){
                        document.write("Juillet");
}
                            else if (mois ===8){
                            document.write("Aout");
}
                                else if (mois ===9){
                                document.write("Septembre");
}
                                    else if (mois ===10){
                                    document.write("Octobre");
}
                                        else if (mois ===11){
                                        document.write("Novembre");
}
                                            else if (mois ===12){
                                            document.write("Decembre");
}
                                                else{
                                                    document.write("Mois invalide");
}