var rouge;
var vert;
var jaune;
var couleur;
jaune = "JAUNE";
rouge = "ROUGE";
vert = "VERT";
couleur = prompt("Souhaite vous avoir la couleur: jaune, vert ou rouge?");

if(couleur.toUpperCase()=== rouge){
    document.write("<p class='rouge'>Ce texte est en rouge</p>")
}
else if(couleur.toUpperCase()=== vert){
    document.write("<p class='vert'>Ce texte est en vert</p>")
}
else if(couleur.toUpperCase()=== "JAUNE"){
    document.write("<p class='jaune'>Ce texte est en jaune</p>")
}
else{
    document.write("Erreur")
}