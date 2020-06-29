
// RADIO BOUTON UNIVERS
var $radios = $('input[name="choixUnivers"]');
$radios.change(function() {
    var radioValue = $("input[name='choixUnivers']:checked").val();
    if (radioValue === "starWars"){
        $('#sectionMarvel').hide();
        $('#sectionDC').hide();
        $('#sectionStarWars').show();
    }
    else if (radioValue ==="marvel"){
        $('#sectionDC').hide();
        $('#sectionStarWars').hide();
        $('#sectionMarvel').show();
    }
    else {
        $('#sectionStarWars').hide();
        $('#sectionMarvel').hide();
        $('#sectionDC').show();
    }
});

let $persoStarWars = $("input[name='persoStarWars']");
$persoStarWars.change(function() {
    let persoCocher = ($("#persoStarWars option:selected").text());
     if (persoCocher === "Yoda"){
         $('#imagePersoStarwars').attr('src','/img/starwars/yoda.png')
     }
});


// function nombreCaractere (str) {
//     if (this.length >3){
//         $('#nomUsage').replaceWith('<h2>FOUTUVIARFE</h2>')
//     }
// }
// nombreCaractere($('#nomUsage'));

// $('.img-fluid').click(){
// var idImages = $(this).attr('id');
// }