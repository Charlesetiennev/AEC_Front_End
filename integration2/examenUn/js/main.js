/*styles.css*/
/*Par Charles-Etienne Villemure*/
/*Le 22 Mai 2020*/
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var rd = ctx.createRadialGradient(canvas.width/2,canvas.height/2,90,canvas.width/2,canvas.height/2,150);
rd.addColorStop(0,'#FF9104');
rd.addColorStop(1,'black');
ctx.fillStyle = rd;
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,canvas.width/2,0,2*Math.PI,false);
ctx.fill();
ctx.fillStyle='black';
ctx.textAlign='center';
ctx.font = "50px Oldtown, fantasy";
ctx.fillText('Mars', canvas.width/2, canvas.height/2);
    // UN
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // DEUX
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // TROIS
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // QUATRE
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // CINQ
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // SIX
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // SEPT
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // HUIT
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // NEUF
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // DIX
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // ONZE
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // DONZE
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // TREIZE
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // QUATORZE
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
    // QUINZE
ctx.beginPath();
ctx.arc( Math.random()*canvas.width, Math.random()*canvas.height,1,0,2*Math.PI);
ctx.fillStyle= 'white';
ctx.fill();
