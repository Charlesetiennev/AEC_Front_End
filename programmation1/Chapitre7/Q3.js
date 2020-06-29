// Créez une classe Examen qui contient 5 questions. Chaque question vaut de zéro à 20 points.
// Examen possède la fonction GetNote() qui retourne son score sur 100
// Créez une classe Etudiant qui contient les propriétés : nom, prénom et un Examen.
//
//     Instanciez 10 étudiants avec chacun un examen dont chaque résultat de chaque
//     question est choisi aléatoirement.
//
//     Affichez les élèves qui réussissent l’examen et ceux qui échouent.

class Examen {
    constructor(q1,q2,q3,q4,q5){

    }
}

class Etudiant{
    constructor(nom,prenom,Examen){
        this.nom = nom;
        this.prenom = prenom;
        this.Examen = Examen;
    }
}

let etudiant1 = new Etudiant("Villemure", "Charles");
let etudiant2 = new Etudiant("Desrosier", "Charles");
let etudiant3 = new Etudiant("Phan", "Charles");
let etudiant4 = new Etudiant("Richard", "Charles");
let etudiant5 = new Etudiant("Etienne", "Charles");
let etudiant6 = new Etudiant("Dallaire", "Charles");
let etudiant7 = new Etudiant("Hamad", "Charles");
let etudiant8 = new Etudiant("Villeneuve", "Charles");
let etudiant9 = new Etudiant("Boisrond", "Charles");
let etudiant10 = new Etudiant("Pudider", "Charles");

