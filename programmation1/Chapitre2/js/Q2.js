var achat = 350 ;
var escompte = achat * (-20/100);
var reduction = escompte - achat ;
if (achat >= 200){

    reduction = achat - escompte;
    document.write("votre total avant reduction est de: " + achat);
    document.write("votre total avec reduction est de: " + reduction);
    document.write("votre reduction est de: " + escompte);



}