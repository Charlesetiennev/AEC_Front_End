var revenu;
var pourcentage;
revenu = Number(prompt("Entrez le revenu annuelle"));

if(revenu <= 7000){
    pourcentage = revenu * (16/100);
    revenu = revenu - pourcentage;
    document.write("Le revenu imposable est de :" + revenu);
}

else if(revenu >7000 && revenu <= 14000){
    revenu = revenu - 1120;
    pourcentage = revenu * (19.5/100);
    revenu = revenu - pourcentage;
    document.write("Le revenu imposable est de :" + revenu);
}
else if(revenu>14000 && revenu <=23000){
    revenu = revenu-2484;
    pourcentage = revenu * (21.5/100);
    revenu = revenu - pourcentage;
    document.write("Le revenu imposable est de :" + revenu);
}
else if(revenu >23000 && revenu <= 50000){
    revenu = revenu- 4420;
    pourcentage = revenu * (24.5/100);
    revenu = revenu - pourcentage;
    document.write("Le revenu imposable est de :" + revenu);
}
else{
    revenu = revenu-11035;
    pourcentage = revenu * (26/100);
    revenu = revenu - pourcentage;
    document.write("Le revenu imposable est de :" + revenu);

}