// Le premier jour de l'ouverture de votre compte, vous déposez .01 . À chaque jour pendant 10 jours,' +
// '' +
// ' vous déposez le double de la veille. Affichez pour chaque jour, le numéro du jour, ' +
// 'le montant déposé et le solde de votre compte.
// solde
// montantdeposer
// numerodujour

for(jours = 1; jours<=10;jours++){
    var depot=.01;
    while(depot){
        depot=depot*2;
    }
        document.write(depot+ "au jour: "+ jours+"<br>" )

}
