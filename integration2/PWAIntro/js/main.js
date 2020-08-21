/*Main.js
Par Charles-Etienne Villemure
Le 2 Avril 2020*/
let flecheVersBas = true;
$('.fa-chevron-circle-down').click(function () {
    if (flecheVersBas === true){
        $('.fa-chevron-circle-down').addClass('fa-flip-vertical');
        flecheVersBas = false
    }
    else {
        $('.fa-chevron-circle-down').removeClass('fa-flip-vertical');
        flecheVersBas = true;
    }
});