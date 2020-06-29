/*Main.js
Par Charles-Etienne Villemure
Le 4/25/2020
*/

var canvas = document.getElementById("monCanevas");
var ctx = canvas.getContext('2d');
//DECLARATION VARIENT
var grd = ctx.createRadialGradient(50, 50, 5, 50, 60, 400);
grd.addColorStop(0, "yellow");
grd.addColorStop(1, "#0097CC");
// REMPLISSAGE
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 800, 500);
ctx.beginPath();
ctx.fillStyle='#2caa2a';
ctx.ellipse(400, 500, 600, 250,0, 0, 60);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#006500";
ctx.fill();
ctx.fillStyle='#D9371B';
ctx.fillRect(300,110,170,170);
ctx.fillStyle ='#250601';
ctx.fillRect(310,120,150,150);
ctx.fillStyle ='#D9371B';
ctx.font = '100px Arial';
ctx.fillText('An',325,220);

