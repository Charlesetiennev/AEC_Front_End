/*styles.css*/
/*Par Charles-Etienne Villemure*/
/*Le 22 Mai 2020*/
function validerFormulaire() {
    let x = document.forms['inscription']['codeRegional'].value;
    if (x === '819' || x === '450' || x === '514'){
        return true;
    }
    else {
        alert ('Mauvais code Regional.');
    return  false;
    }
}