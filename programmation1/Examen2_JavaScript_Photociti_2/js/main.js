// main.js
// Par Charles-Etienne Villemure
// Le 12 Avril 2020
//VALEUR DE DEPART
let btnActif = false;
let motValide;
$('.lettreOnze').hide();
$('.lettreDouze').hide();
//CHANGEMENT DE SECTION ET HOVER
$('#sectionDeux').hide();
$('#sectionTrois').hide();
$('.aSectionDeux').click(function () {
  $('#sectionUn').hide();
  $('#sectionTrois').hide();
  $('#sectionDeux').show();
});
$('.aSectionUn').click(function () {
  $('#sectionDeux').hide();
  $('#sectionUn').show();
});
$('.aSectionTrois').click(function () {
  $('#sectionDeux').hide();
  $('#sectionTrois').show();
  $('.flecheHide').hide();
});
$('.nimporte').hover(
  function () {
    $('.nimporte').css({ background: 'red' });
  },
  function () {
    $('.nimporte').css({ background: 'white' });
  }
);
$('.fleche').hover(
  function () {
    $(this).css({ 'text-shadow': '-13px -9px 8px rgba(61,27,206,0.76)' });
  },
  function () {
    $(this).css({ 'text-shadow': 'none' });
  }
);
//VERIFICATION DE LA LONGUEUR DU MOT
$('#motEntrez').keyup(function () {
  let motEcris = $('#motEntrez').val();
  if (motEcris.length < 3) {
    $('#aideNom').html('Trop Court');
    $('#aideNom').css('color', 'red');
    btnActif = false;
  } else if (motEcris.length >= 3 && motEcris.length <= 12) {
    $('#aideNom').html('valide');
    $('#aideNom').css('color', 'green');
    btnActif = true;
  } else if (motEcris.length >= 12) {
    $('#aideNom').html('Trop long');
    $('#aideNom').css('color', 'red');
    btnActif = false;
  }
});
//RECUPERATION DU MOT AU CLICK
motValide = $('#motEntrez').val();
$('.nimporte').click(function () {
  $('#sectionUn').hide();
  $('#sectionDeux').show();
  motValide = $('#motEntrez').val();
  motValide = motValide.toUpperCase();
  // accentsTidy = function(s){
  //     let r=s.toLowerCase();
  //     r = r.replace(new RegExp("à", 'g'),"a");
  //     r = r.replace(new RegExp("[èéêë]", 'g'),"e");
  //     r = r.replace(new RegExp("ù", 'g'),"u");
  //     return r;
  // };
  // accentsTidy(motValide);
  lettreUn = motValide[0];
  lettreDeux = motValide[1];
  lettreTrois = motValide[2];
  lettreQuatre = motValide[3];
  lettreCinq = motValide[4];
  lettreSix = motValide[5];
  lettreSept = motValide[6];
  lettreHuit = motValide[7];
  lettreNeuf = motValide[8];
  lettreDix = motValide[9];
  lettreOnze = motValide[10];
  lettreDouze = motValide[11];
  //RECUPERATION DES LETTRES DANS MON HTML
  lettreUn = $('#lettreUn').prop(
    'src',
    'Letters/' + lettreUn + '/' + lettreUn + '1.jpg'
  );
  lettreDeux = $('#lettreDeux').prop(
    'src',
    'Letters/' + lettreDeux + '/' + lettreDeux + '1.jpg'
  );
  lettreTrois = $('#lettreTrois').prop(
    'src',
    'Letters/' + lettreTrois + '/' + lettreTrois + '1.jpg'
  );
  lettreQuatre = $('#lettreQuattre').prop(
    'src',
    'Letters/' + lettreQuatre + '/' + lettreQuatre + '1.jpg'
  );
  lettreCinq = $('#lettreCinq').prop(
    'src',
    'Letters/' + lettreCinq + '/' + lettreCinq + '1.jpg'
  );
  lettreSix = $('#lettreSix').prop(
    'src',
    'Letters/' + lettreSix + '/' + lettreSix + '1.jpg'
  );
  lettreSept = $('#lettreSept').prop(
    'src',
    'Letters/' + lettreSept + '/' + lettreSept + '1.jpg'
  );
  lettreHuit = $('#lettreHuit').prop(
    'src',
    'Letters/' + lettreHuit + '/' + lettreHuit + '1.jpg'
  );
  lettreHuit = $('#lettreNeuf').prop(
    'src',
    'Letters/' + lettreNeuf + '/' + lettreNeuf + '1.jpg'
  );
  lettreHuit = $('#lettreDix').prop(
    'src',
    'Letters/' + lettreDix + '/' + lettreDix + '1.jpg'
  );
  lettreHuit = $('#lettreOnze').prop(
    'src',
    'Letters/' + lettreOnze + '/' + lettreOnze + '1.jpg'
  );
  lettreHuit = $('#lettreDouze').prop(
    'src',
    'Letters/' + lettreDouze + '/' + lettreDouze + '1.jpg'
  );
  //AFFICHAGE DES LETTRES
  if (motValide[3] === undefined) {
    $('.lettreQuatre').hide();
    $('.lettreCinq').hide();
    $('.lettreSix').hide();
    $('.lettreSept').hide();
    $('.lettreHuit').hide();
    $('.lettreNeuf').hide();
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[4] === undefined) {
    $('.lettreCinq').hide();
    $('.lettreSix').hide();
    $('.lettreSept').hide();
    $('.lettreHuit').hide();
    $('.lettreNeuf').hide();
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[5] === undefined) {
    $('.lettreSix').hide();
    $('.lettreSept').hide();
    $('.lettreHuit').hide();
    $('.lettreNeuf').hide();
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[6] === undefined) {
    $('.lettreSept').hide();
    $('.lettreHuit').hide();
    $('.lettreNeuf').hide();
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[7] === undefined) {
    $('.lettreHuit').hide();
    $('.lettreNeuf').hide();
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[8] === undefined) {
    $('.lettreNeuf').hide();
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[9] === undefined) {
    $('.lettreDix').hide();
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[10] === undefined) {
    $('.lettreOnze').hide();
    $('.lettreDouze').hide();
  } else if (motValide[11] === undefined) {
    $('.lettreOnze').show();
    $('.lettreDouze').hide();
  } else {
    $('.lettreOnze').show();
    $('.lettreDouze').show();
  }
});
//OUVRIR MODAL ET AFFICHER LETTRES
let srcImage1;
let srcImage2;
let srcDossier;
let idImage1;
let idImage2;
$('.borderImg').click(function () {
  $('#myModal').modal('show');
  srcImage1 = $(this).attr('src');
  srcDossier = srcImage1.substr(0, 11);
  idImage1 = $(this).prop('id');
  $('#carouselUn').prop('src', srcDossier + '1.jpg');
  $('#carouselDeux').prop('src', srcDossier + '2.jpg');
  $('#carouselTrois').prop('src', srcDossier + '3.jpg');
  $('#carouselQuatre').prop('src', srcDossier + '4.jpg');
  $('#carouselCinq').prop('src', srcDossier + '5.jpg');
  $('.imgCarousel').click(function () {
    idImage2 = $(this).prop('id');
    srcImage2 = $(this).attr('src');
    $('#' + idImage1).attr('src', srcImage2);
  });
});
//COULEUR BACKGROUND
$('.blanc').click(function () {
  $('.lettre').addClass('blanc');
  $('.lettre').removeClass('bleu bleuFonce gris noir rose rouge');
});
$('.bleu').click(function () {
  $('.lettre').addClass('bleu');
  $('.lettre').removeClass('blanc bleuFonce gris noir rose rouge');
});
$('.bleuFonce').click(function () {
  $('.lettre').addClass('bleuFonce');
  $('.lettre').removeClass('blanc bleu gris noir rose rouge');
});
$('.gris').click(function () {
  $('.lettre').addClass('gris');
  $('.lettre').removeClass('blanc bleu bleuFonce noir rose rouge');
});
$('.noir').click(function () {
  $('.lettre').addClass('noir');
  $('.lettre').removeClass('blanc bleu bleuFonce gris rose rouge');
});
$('.rose').click(function () {
  $('.lettre').addClass('rose');
  $('.lettre').removeClass('blanc bleu bleuFonce gris noir rouge');
});
$('.rouge').click(function () {
  $('.lettre').addClass('rouge');
  $('.lettre').removeClass('blanc bleu bleuFonce gris noir rose');
});

/*
https://charlesetiennev.github.io/AEC_Front_End/Programmation1/Examen2_JavaScript_Photociti_2/index.html
 */
