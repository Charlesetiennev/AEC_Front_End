var nomUtilisateur;
var motDePasse;

nomUtilisateur = prompt("Entrez votre nom d'utilisateur");
motDePasse = prompt("Entrez votre mot de passe");

if (nomUtilisateur === "admin" && motDePasse === "12345"){
    document.write("Bonjour " + nomUtilisateur);
}
    else {
        document.write("Votre nom d'utilisateur ou votre mot de passe est invalide");
}