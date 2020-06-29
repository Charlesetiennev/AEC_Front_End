class JoueurHockey{
    constructor(nom,nbButs,nbPasses){
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }
    TotalPoints(){
        return (this.nbButs + this.nbPasses);
    }
}
class Equipe{
    constructor(nom,j1,j2,j3)
    {
        this.nom = nom;
        this.joueur1 = j1;
        this.joueur2 = j2;
        this.joueur3 = j3;
    }
    AfficherAlignement(){
        return (this.joueur1.nom + " " + this.joueur2.nom + " " + this.joueur3.nom);
    }
    AfficherPointsTotaux(){
        return (this.joueur1.TotalPoints() + this.joueur2.TotalPoints() + this.joueur3.TotalPoints())
    }
}

let Sydney = new JoueurHockey("Sydney Crosby",454,787);
let Mario = new JoueurHockey("Mario Lemieux",690,1033);
let Jaromir = new JoueurHockey("Jaromir Jagr",766,1155);

let Canadiens = new Equipe("Canadiens de Montreal",Sydney, Mario, Jaromir);


let essaie2 = Canadiens.AfficherPointsTotaux();
document.write(essaie2);