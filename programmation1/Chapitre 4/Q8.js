//Q8.JS//
// Par Charles-Etienne Villemure//
// Le 25 Janvier 2020//
// Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes)
// qui ont une note supérieure à la moyenne.
var notesMoyenne;
var eleves = [];
var notes = [];

for (i=0;i<5;i++){
    eleves[i] = prompt("Entrez le nom de l'eleve: ");
    notes[i] = Number(prompt("Entrez la note obtenue: "));
}

notesMoyenne = (notes[0] + notes[1]+ notes[2]+ notes[3]+ notes[4])/ 5;

for (i=0; i<5;i++){
    if (notes[i]>notesMoyenne){
        document.write(eleves[i] + notes[i]+ "<br>");
    }

}
document.write(notesMoyenne);
