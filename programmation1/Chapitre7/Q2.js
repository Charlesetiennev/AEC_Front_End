class Cylindre{
    constructor(hauteur,rayon){
        this.hauteur = hauteur;
        this.rayon = rayon;
    }
    GetVolume(){
        // this.hauteur * 3.1416 * Math.pow(this.rayon,2);
        return Math.PI * Math.pow(this.rayon,2) * this.hauteur;
    }
}
class Boite{
    constructor(cylindreArray){
        this.cylindreArray = cylindreArray;
    }

    GetVolumeBoite(){
        for (let i =0;i<cylindreArray.length;i++){
            let volumeTotal = 0;
            volumeTotal += cylindreArray[i].GetVolume();
        }
        return volumeTotal;
    }
}

let cylindre1 = new Cylindre(10,3);
let cylindre2 = new Cylindre(10,15);
let cylindre3 = new Cylindre(8,5);
let cylindre4 = new Cylindre(11,20);
let cylindre5 = new Cylindre(18,4);

let array = new Boite([cylindre1,cylindre2,cylindre3,cylindre4,cylindre5]);
console.log(cylindre2.GetVolume());
let VolumeTotal = (cylindre1.GetVolume() + cylindre2.GetVolume());
console.log(VolumeTotal);



//Faire un let qui va juste calculer le volume pour