// Afficher le montant et la taxe de 9% pour les montants
// de $5.00 à $100.00 par tranche de $5.00.

for(prix=5;prix<=100;prix+=5){
    var taxes = prix*(9/100);
    taxes = Math.round((taxes)*100) /100;
    document.write("Pour " + prix + "$, La taxes est de : " + taxes + "<br>")
}