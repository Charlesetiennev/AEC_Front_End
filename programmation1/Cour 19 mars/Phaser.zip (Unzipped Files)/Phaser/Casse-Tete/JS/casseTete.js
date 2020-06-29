$('.img-fluid').hover(function () {
    $(this).css('cursor','pointer');
});




let premierClique = true;
let imageUn;
let imageDeux;
let srcImage1;
let srcImage2;

$('.img-fluid').click(function () {
    if (premierClique === true) {
        imageUn = $(this).attr('id');
        srcImage1 = $(this).attr('src');
        premierClique = false;
    } else if (premierClique === false) {
        imageDeux = $(this).attr('id');
        srcImage2 = $(this).attr('src');
        $(this).attr('src', imageUn);
        $('.img-fluid').show();
        $('#' + imageUn).attr('src',srcImage2);
        $('#' + imageDeux).attr('src',srcImage1);
        premierClique = true;
    }
});
function victoire() {
    for (let i=1;i<=9;i++){
        if ()
    }
}

// $(this).attr('src', imageUn);
// $("#idEnregistrer').attr("src",imageDeux);
// else if (premierClique === false){
//     let imageDeux = $(this).attr('src');
//     $(this).attr('src', imageUn);
// }