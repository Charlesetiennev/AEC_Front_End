$( "#boutonDroite" ).click(function() {
     $("#flashID").css("left","+=100px");
});
$( "#boutonGauche" ).click(function() {
    $("#flashID").css("left","-=100px");
});
$("#boutonChangerImage").click(function() {
    if ($('#flashID').attr('src')==="img/Flash1.png"){
        $("#flashID").attr("src","img/Flash2.png");
    }
    else {
        $("#flashID").attr("src","img/Flash1.png");
    }
});
$( "#boutonEnleverImage" ).click(function() {
    $("#flashID").hide();
});
$( "#boutonAjouterImage" ).click(function() {
    $("#flashID").show();
});
$( "#boutonAjouterAttribut" ).click(function() {
    $("#flashID").attr("alt","photo de flash");
});
$( "#boutonAjouterTitre" ).click(function() {
    $( "body" ).prepend( "<h1>Justice League</h1>" );
});
$( "#boutonDupliquer" ).click(function() {
    $( "#flashID" ).clone().appendTo(".h-75");
});
$('#boutonRalentir').click(function () {
    $('#flashID').remove();
});
$("#boutonTeleport").click(function () {
   if ($("#flashID").css("top")!='1200px'){
       $("#flashID").css("top",'1200px')
   }
   else {
       $("#flashID").css("top",'0px')
   }
});
$( "#boutonNuke" ).click(function() {
    $("body").replaceWith("<img src='img/nukeFlash.jpg' class='img-fluid' alt='nuke'>");
});
$( "#boutonPerso1").click(function() {
    $("#flashID").css("top","+=75px")
});
$( "#boutonPerso2").click(function() {
    $("#flashID").css("top","-=75px")
});







let monTimer;
let vitesseSupreme = false;
$( "#boutonVitesseSupreme" ).click(function() {
    if(!vitesseSupreme){
        monTimer  = setInterval(function(){
            $("#flashID").toggle() }, 500);
        vitesseSupreme = true;    }});
$( "#boutonFinVitesseSupreme" ).click(function() {
    clearInterval(monTimer);
    vitesseSupreme = false;
    $("#flashID").show();});








// https://charlesetiennev.github.io/AEC_Front_End/Programmation1/chapitre11/flash2020/Flash Version 2020/index.html

